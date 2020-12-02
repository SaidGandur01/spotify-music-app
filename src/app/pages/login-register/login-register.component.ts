import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {

  public bandera: boolean;
  public loginForm;
  public registerForm;
  public user: User;
  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: Router) {
    this.bandera = true;
    this.loginFormMethod();
    this.registerFormMethod();
    this.user = new User('', '', '', '', false);
  }

  public loginFormMethod() {
    this.loginForm = this.fb.group({
      email: ['',  [Validators.required, Validators.email]],
      password: ['', Validators.required],
      checkBox: [false, Validators.required]
    });
  }

  public registerFormMethod() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public onSubmitLogin(form: any, formDirective: FormGroupDirective) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.user.rememberToken = form.value.checkBox;
    let userLogged = this.userService.login(this.user);
    if (userLogged) {
      form.reset();
      formDirective.resetForm();
      this.router.navigate(['home']);
      window.location.href = 'https://accounts.spotify.com/authorize?client_id=28d3b1921dff473287906aeb804a4fcb&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome%2Fsearch&scope=user-read-private%20user-read-email%20user-library-modify%20user-library-read&state=34fFs29kd09';
      // window.open('https://accounts.spotify.com/authorize?client_id=28d3b1921dff473287906aeb804a4fcb&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome%2Fsearch&scope=user-read-private%20user-read-email&state=34fFs29kd09');
    } else {
      alert("Credenciales no válidas");
    }

  }

  public onSubmitRegister(form: any, formDirective: FormGroupDirective) {
    this.user.nombres = form.value.name;
    this.user.apellidos = form.value.lastname;
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.userService.setIdentity(this.user);
    this.bandera = true;
    form.reset();
    formDirective.resetForm();
  }

  public changeToRegister() {
    this.bandera = false;
  }

  public changeToLogin() {
    this.bandera = true;
  }

}
