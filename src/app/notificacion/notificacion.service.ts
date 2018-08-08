import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  private subject = new Subject<any>();
  public emisor = this.subject.asObservable();
  constructor() { }
  mostrar(tipo, message)
  {
    this.subject.next({ tipo, message });
  }
}
