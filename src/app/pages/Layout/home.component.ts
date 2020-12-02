import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: User;
  public nombre: string;
  public apellido: string;

  constructor(private router: Router, private userService: UserServiceService) {
    this.user = new User('', '', '', '', false);
    this.nombre = '';
    this.apellido = '';
  }

  ngOnInit(): void {
    this.user = this.userService.getIdentity(); 
    this.nombre = this.user.nombres;
    this.apellido = this.user.apellidos;
  }

  public logOut() {
    // localStorage.removeItem('userLogged');
    // localStorage.removeItem('token');
    // localStorage.removeItem('usuario');
    // sessionStorage.removeItem('userLogged');

    this.router.navigate(['login']);
  }
}
