import { Component } from '@angular/core';

@Component({
  selector: 'app-user-add-edit',
  standalone: true,
  imports: [],
  template: `
    <div mat-dialog-title>
      <h2>Iniciar sesión o registrarse</h2>
    </div>
    <div mat-dialog-content>
      <h3>Te damos la bienvenida a Hotel&Restaurant</h3>
      <span>Te vamos a confirmar el número por teléfono o mensaje de texto. Sujeto a las tarifas estándar para mensajes y datos. <a href="#">Política de privacidad</a></span>
      <button>Continúa</button>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button mat-dialog-close>Save</button>
    </div>
  `,
  styleUrl: './user-add-edit.component.scss'
})
export class UserAddEditComponent {

}
