import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent{

  nombre:string = "Logan"
  nota:number = 4.0

  constructor() { }

  cambiarNombre(){
    this.nombre = "Wolverine"
  }

}
