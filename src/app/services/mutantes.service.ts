import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class MutantesService {

  mutantes:any

  constructor( private http: Http) {
     console.log("Mutantes listos para usar")
     this.cargarMutantes()
  }

  cargarMutantes(){
     this.http.get("assets/data/mutantes.json")
         .subscribe( respuesta =>{
            let data = respuesta.json()
            console.log(data)
            this.mutantes = data.mutantes
         } )
  }

}
