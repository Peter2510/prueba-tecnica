import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './service/usuarios.service';
import { Usuario } from '../models/Usuario';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { IconFieldModule } from 'primeng/iconfield';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios',
  imports: [TableModule, CommonModule, ButtonModule, DialogModule, InputTextModule, InputIconModule, FormsModule, ReactiveFormsModule,
    IftaLabelModule, IconFieldModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  constructor(private usuarioService: UsuariosService) {
    this.obtenerUsuarios()
  }

  usuarios: Usuario[] = [];
  usuario: Usuario = { id: 0, nombre: '', email: '', edad: 0 };
  visible: boolean = false;
  editMode: boolean = false;
  loading: boolean = false;

  ngOnInit() {
    this.obtenerUsuarios();
  }

  showDialog() {
    this.editMode = false;
    this.usuario = { id: 0, nombre: '', email: '', edad: 0 };
    this.visible = true;
  }

  showEditDialog(cliente: Usuario) {
    this.editMode = true;
    this.usuario = { ...cliente };
    this.visible = true;
  }

  accionCliente() {
    if (!this.validaciones()) {
      this.visible = false;
      return;
    }
    if (this.editMode) {
      // const index = this.clientes.findIndex(c => c.id === this.cliente.id);
      // if (index !== -1) {
      //   this.clientes[index] = { ...this.cliente };
      // }
      console.log("actu")
    } else {
      this.crearCliente();
    }
    this.visible = false;
  }


  crearCliente(): void {

    this.usuarioService.registrarUsuario(this.usuario).subscribe({
      next: (response) => {
        console.log('Cliente creado:', response);
        this.mostrarExito('Usuario creado con éxito');
        this.obtenerUsuarios()
      },
      error: (error) => {
        console.error('Error al crear el cliente:', error);
        this.mostrarErrores(error.error.mensaje);
      }
    });
  }

  validaciones() {
    const errores: string[] = [];

    if (!this.usuario.nombre || this.usuario.nombre.trim().length < 3) {
      errores.push('El nombre es requerido y debe tener al menos 3 caracteres.');
    }


    // if (!this.usuario.edad || !/^\d{8}$/.test(String(this.usuario.edad))) {
    //   errores.push('La edad es requerido y debe tener 1 dígitos numéricos.');
    // }


    if (errores.length > 0) {
      this.mostrarErrores(errores.join('\n'))
      //alert(errores.join('\n'));
      return false;
    }
    return true;
  }

  obtenerUsuarios(): void {
    this.loading = true;
    this.usuarioService.obtenerUsuariosRegistrados().subscribe({
      next: (response: any) => {
        //console.log(response)
        this.usuarios = response.usuarios;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
        this.loading = false;
      }
    });
  }

  mostrarErrores(errores: any) {
    Swal.fire({
      title: 'error',
      text: errores,
      icon: 'error'
    })
  }

  mostrarExito(mensaje:any){
    Swal.fire({
      title: 'Ok',
      text: mensaje,
      icon: 'success'
    })
  }

}
