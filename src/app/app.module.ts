import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/Layout/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './Services/SearchService/search.service';
import { UserServiceService } from './Services/UserService/user-service.service';
import { BuscarComponent } from './Components/buscar/buscar.component';
import { FavoritosComponent } from './Components/favoritos/favoritos.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomeComponent,
    BuscarComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({timeOut: 1500})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SearchService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
