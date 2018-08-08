import { RegisterService } from './register.service';

import { NotificacionService } from './../notificacion/notificacion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha } from './../Fechas/fechas';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    frmRegister: FormGroup;
    fecha: Fecha;
    users: any;
   

    constructor(private fb: FormBuilder, private notifica: NotificacionService,private serviceRe: RegisterService) {
        this.frmRegister = fb.group({
            identificacion: ['', Validators.required],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            fechaNacimiento: ['', Validators.required],
            user: ['', Validators.required],
            contraseniaC: ['', Validators.required]

        })
        this.fecha = new Fecha();
       
    }

    ngOnInit() {
    }
    //Funcion que me permite validar si el cliente es mayor de edad
    validaFecha(){
        const frm = this.frmRegister.value;
        console.log("entro");
        let result = this.fecha.calcularEdad(frm.fechaNacimiento);
        
        if (result[0].anios >= 18)
        {
            this.notifica.mostrar('info', 'cumple con la mayoria de edad');
            return true;
        } else
        {
            this.notifica.mostrar('error', 'no cumple con la mayoria de edad');
            return false;
            }
       
    }
  
registerCustomer ()
  {
    this.serviceRe.getUsers().subscribe((content) => (this.users = content));
    console.log(this.users + "hola mundo");
  }

    ///////////////////




}
