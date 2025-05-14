import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './service/usuarios.service';
import { Usuario } from '../models/Usuario';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios',
  imports: [TableModule,CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  constructor(private usuarioService: UsuariosService){
    this.obtenerUsuarios()
  }

  usuarios!: Usuario[];

  //funcion para obtener usuarios
  obtenerUsuarios(){
    this.usuarioService.obtenerUsuariosRegistrados().subscribe({
      next: (data:any) =>{
        this.usuarios = data.usuarios;
      }, error: (error:any) => {
        
        // Swal.fire({
        //   title: "error",
        //   msg: error,
        //   text: 
        // })
        console.log(error)

      }
    })
  }

}
