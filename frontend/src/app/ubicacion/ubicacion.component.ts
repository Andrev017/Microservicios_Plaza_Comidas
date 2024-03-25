import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [ButtonModule,MessagesModule,PanelModule],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {

}
