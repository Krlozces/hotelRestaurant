import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  template: `
    <header>
      <section class="first-header">
        <article class="logo-container">
          <img src="assets/images/logo.jpg" alt="logo" class="logo" />
          <span class="logo-title">
            Hotel&Restaurant
          </span>
        </article>
        <article class="btn-container">
          <button id="estadias" type="button" class="btn-header" [ngClass]="{'active': selectedButton === 'estadias'}" (click)="selectButton('estadias')">
            Estadías
          </button>
          <button id="experiencias" type="button" class="btn-header" [ngClass]="{'active': selectedButton === 'experiencias'}" (click)="selectButton('experiencias')">
            Experiencias
          </button>
        </article>
        <article class="sesion-header">
          <!-- La imagen de inicio de sesión -->
          <span>Aquí iría el desplegable para el inicio de sesión</span>
        </article>
      </section>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedButton : string = '';

  selectButton(buttonId: string){
    this.selectedButton = buttonId;
  }
}
