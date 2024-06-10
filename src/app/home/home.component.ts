import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { IntroComponentComponent } from '../intro-component/intro-component.component';
import { FooterComponent } from '../footer/footer.component';
import { DetailComponent } from '../detail/detail.component';
import { ClientsComponent } from '../clients/clients.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    IntroComponentComponent,
    FooterComponent,
    DetailComponent,
    ClientsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
