import { NotificacionService } from './notificacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  message: string = '';
  tipo: string = '';
  constructor(private notifica: NotificacionService) { 
    this.notifica.emisor.subscribe(d => {
      this.message = d.message;
      this.tipo = d.tipo;
    })
  }

  ngOnInit() {
  }

}
