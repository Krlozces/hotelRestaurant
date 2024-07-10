import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf, FontAwesomeModule],
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
          <button class="btn-dropdown" (click)="displayDropdown()">
            <span class="bars-container">
              <fa-icon [icon]="faBars" size="lg"></fa-icon>
            </span>
            <span class="user-container">
              <fa-icon [icon]="faUser" size="lg"></fa-icon>
            </span>
          </button>
          <ul *ngIf="isDropdownVisible" class="dropdown">
            <li class="dropdown-item">
              <a href="#">Regístrate</a>
            </li>
            <li class="dropdown-item">
              <a href="#">Inicia sesión</a>
            </li>
            <li class="dropdown-item">
              <a href="#">Centro de ayuda</a>
            </li>
          </ul>
        </article>
      </section>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedButton : string = '';
  
  faBars = faBars;
  faUser = faUser;
  isDropdownVisible = false;

  selectButton(buttonId: string){
    this.selectedButton = buttonId;
  }

  displayDropdown(){
    this.isDropdownVisible = !this.isDropdownVisible;
  }

}
