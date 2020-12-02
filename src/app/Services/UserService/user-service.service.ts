import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public identity;

  constructor() { }

  public login(user: User) {
    let flag: boolean;
    let said = this.getIdentity();
    if (user.email == said.email && user.password == said.password) {
      if (user.rememberToken) {
        localStorage.setItem('userLogged', JSON.stringify(user));
      } else {
        sessionStorage.setItem('userLogged', JSON.stringify(user));
      }
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }

  public setIdentity(user: User) {
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  public getIdentity(){
    let identity = JSON.parse(localStorage.getItem('usuario')) ? JSON.parse(localStorage.getItem('usuario')) : JSON.parse(sessionStorage.getItem('usuario'));

    if (identity && identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }
}


