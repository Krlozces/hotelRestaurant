import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <h2>Inspiración para escapadas futuras</h2>
      <div class="section-container">
        <section>
          <h3>Asistencia</h3>
          <ul>
            <li>
              <a href="#">Centro de ayuda</a>
            </li>
            <li>
              <a href="#">Antidiscriminación</a>
            </li>
            <li>
              <a href="#">Apoyo para discapacitados</a> 
            </li>
            <li>
              <a href="#">Opciones de cancelación</a>
            </li>
            <li>
              <a href="#">Otra opción</a>
            </li>
            <li>
              <a href="#">Otra opción</a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Modo anfitrión</h3>
          <ul>
            <li>
              <a href="#">Foro comunitario</a>
            </li>
            <li>
              <a href="#">Otra opción</a>
            </li>
            <li>
              <a href="#">Otra opción</a>
            </li>
            <li>
              <a href="#">Otra opción</a>
            </li>
            <li>
              <a href="#">Otra opción</a>
            </li>
            <li>
              <a href="#">Otra opción</a>
            </li>
          </ul>
        </section>
      </div>
      <div class="span-container">
        <span>&#169; 2024 PetusoTwo, Krlozces</span>
        <span><a href="#">Privacidad</a></span>
        <span><a href="#">Términos</a></span>
        <span><a href="#">Mapa del sitio</a></span>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
