import { HomeComponent } from "./home/home.component";
import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PrestamoClienteComponent } from "./prestamo-cliente/prestamo-cliente.component";

export const routerConfig: Routes =
        [
                { path: 'home', component: HomeComponent },
                { path: 'login', component: LoginComponent },
                { path: 'register', component: RegisterComponent },
                { path: 'prestamo', component: PrestamoClienteComponent},

                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home' },
        ]