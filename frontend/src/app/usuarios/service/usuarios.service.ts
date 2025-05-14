import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private readonly api = 'http://localhost:3201/api/v1/usuarios'

  constructor(private http: HttpClient) { }


  obtenerUsuariosRegistrados(){
    return this.http.get(this.api)
  }

  registrarUsuario(usuario: any){
    return this.http.post(this.api, usuario)
  }

}
