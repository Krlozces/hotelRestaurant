import { Component } from '@angular/core';

@Component({
  selector: 'app-user-add-edit',
  standalone: true,
  imports: [],
  template: `
    <div mat-dialog-title>
      <h2>User form</h2>
    </div>
    <div mat-dialog-content></div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button mat-dialog-close>Save</button>
    </div>
  `,
  styleUrl: './user-add-edit.component.scss'
})
export class UserAddEditComponent {

}
