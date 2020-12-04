import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './Components/buscar/buscar.component';
import { FavoritosComponent } from './Components/favoritos/favoritos.component';
import { HomeComponent } from './pages/Layout/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginRegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: BuscarComponent
      },
      {
        path: 'favorites',
        component: FavoritosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
