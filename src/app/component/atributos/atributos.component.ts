import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent {

  nombreAlt:string = "Esta es una foto del candidato"
  urlImg:string = "assets/img/perfil-candidato.jpg"
  constructor() { }


}
