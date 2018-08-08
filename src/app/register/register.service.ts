import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUsuarios = 'api/Usuarios';
  constructor(private http: Http) { 

  }
  getUsers()
  {
   return  this.http.get(this.apiUsuarios);
    
      // subscribe((content) => (this.tasks = content));
  }
}
