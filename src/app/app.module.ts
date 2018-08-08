
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './royter.config';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { NotificacionService } from './notificacion/notificacion.service';

import { HttpModule } from '@angular/http';
import { PrestamoClienteComponent } from './prestamo-cliente/prestamo-cliente.component';
import { RegisterService } from './register/register.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    NotificacionComponent,
    PrestamoClienteComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [NotificacionService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
