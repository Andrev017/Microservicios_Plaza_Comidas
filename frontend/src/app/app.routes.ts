import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

export const routes: Routes = [
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'sesion', component: InicioSesionComponent }

];
