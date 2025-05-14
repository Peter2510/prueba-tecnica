import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';


export const routes: Routes = [

    {path: 'usuarios', 
        loadChildren: () => import('./usuarios/usuarios.routes').then(e => e.routesUsuario)
    }

];
