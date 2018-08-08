import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestamos } from './../prestamos/prestamos';
import { Fecha } from './../Fechas/fechas';
import { NotificacionService } from './../notificacion/notificacion.service';
@Component({
  selector: 'app-prestamo-cliente',
  templateUrl: './prestamo-cliente.component.html',
  styleUrls: ['./prestamo-cliente.component.css']
})
export class PrestamoClienteComponent implements OnInit {

  frmPrestamo: FormGroup;
  prestamo: Prestamos;
  codigo: any;
  fecha: Fecha;
  prestamoTotal: any;
  constructor(private fb: FormBuilder,private notifica: NotificacionService) {

    this.frmPrestamo = fb.group({
      nombreEmpresa: ['', Validators.required],
      nit: ['', Validators.required],
      codigof: ['', Validators.required],
      salario: ['', Validators.required],
      fechaIngreso: ['', Validators.required],


    })
    this.prestamo = new Prestamos();
    this.fecha = new Fecha();
  }

  ngOnInit() {
  }

  //Función que permite calcular el prestamos segun el salario del cliente

  calcularPrestamo() {
    let frm = this.frmPrestamo.value;
    //reutilizo la funcion para saber que antiguedad tiene el cliente
    let antiguedad = this.fecha.calcularEdad(frm.fechaIngreso);
    let aniosAntiguedad = antiguedad[0].anios;
    let meses = antiguedad[0].meses;
    if (aniosAntiguedad <= 1 && meses < 6)
    {
      this.prestamoTotal = "";
      this.prestamoTotal= "No cumple con el tiempo suficiente para solicitar un credito";
    } else
    {
      if (frm.salario < 800000)
      {
        this.prestamoTotal = "";
        this.prestamoTotal= "No cumple con el salario suficiente para solicitar un credito";
      } else
      {
        if (frm.salario > 800000 && frm.salario < 1000000)
        {
          this.prestamoTotal= "El credito es de $5.000.000";
        }
     
        if (frm.salario > 1000000 && frm.salario < 4000000)
        {
          this.prestamoTotal= "El credito es de $20.000.000";
        }
        if (frm.salario > 4000000)
        {
          this.prestamoTotal= "El credito es de $50.000.000";
        }

        }
      }
    
  }

  //Funcion que me permite calcular el codigo de verificacion
  calcularNit() {
    let frm = this.frmPrestamo.value;
    this.codigo = this.prestamo.calcularDigitoVerificacion(frm.nit);
  }
  //funciòn que me permite saber si la fecha es menor a la actual
  calcularFechaActual() {
    let frm = this.frmPrestamo.value;
    let x=new Date();
      let fecha = frm.fechaIngreso.split("-");
      x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      let today = new Date();
 
    if (x <= today)
    {
      return true;
    }
    {
      return false;
    }
  }

  //funcion que me permite validar el rango del salario
  validarSalario()
  {
    let frm = this.frmPrestamo.value;
    if (frm.salario > 1 && frm.salario <= 100000000)
    {
     
      return true;
    } else
    {
      
      this.notifica.mostrar('error', 'Salario Fuera de Rango');
     
      false;
      }
  }
}
