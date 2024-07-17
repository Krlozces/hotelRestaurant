import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CountryService } from '../country.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-add-edit',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  template: `
    <div mat-dialog-title>
      <h2>Iniciar sesión o registrarse</h2>
    </div>
    <hr/>
    <div mat-dialog-content>
      <h3>Te damos la bienvenida a Hotel&Restaurant</h3>
      <div class="inputs-container">
        <select name="code-countries" id="code-countries" class="phone-number">
          <option *ngFor="let country of countries" [value]="country.code">{{ country.name_es }} ({{ country.dial_code }})</option>
        </select>
        <input type="text" name="phone_number" id="phone_number" placeholder="Número de teléfono" class="phone-number-field" />
      </div>
      <span>Te vamos a confirmar el número por teléfono o mensaje de texto. Sujeto a las tarifas estándar para mensajes y datos. <a href="#">Política de privacidad</a></span>
      <div class="btn-submit-container">
        <button class="btn-submit">Continúa</button>
      </div>
      <hr/>
      <div class="btns-container">
        <a href="#" class="btn-brand">
          <fa-icon [icon] = "faSquareFacebook" size="lg"></fa-icon>
          <span>Continúa con Facebook</span>
        </a>
        <a href="#" class="btn-brand">
          <fa-icon [icon] = "faGoogle" size="lg"></fa-icon>
          <span>Continúa con Google</span>
        </a>
        <a href="#" class="btn-brand">
          <fa-icon [icon] = "faApple" size="lg"></fa-icon>
          <span>Continúa con Apple</span>
        </a>
        <a href="#" class="btn-brand">
          <fa-icon [icon] = "faEnvelope" size="lg"></fa-icon>
          <span>Continúa con el correo electrónico</span>
        </a>
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button mat-dialog-close>Save</button>
    </div>
  `,
  styleUrl: './user-add-edit.component.scss'
})
export class UserAddEditComponent implements OnInit {
  faSquareFacebook = faSquareFacebook;
  faGoogle = faGoogle;
  faApple = faApple;
  faEnvelope = faEnvelope;
  countries: any[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data.countries;
      console.log(this.countries);
    });
  }

}
