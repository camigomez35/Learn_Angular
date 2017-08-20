import { Component } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css']
})
export class EstructuralesComponent {

  exito:boolean = false
  mutantes:string[] = ["Wolverine", "Ciclope", "Magneto"]
  constructor() { }

}
