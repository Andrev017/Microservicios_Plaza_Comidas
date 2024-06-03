import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ButtonModule, PasswordModule,RouterLink ,RouterOutlet],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  constructor(private router:Router) {}
  redirect(){
    this.router.navigate(['/home'])
  }
}
