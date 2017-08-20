import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { VariablesComponent } from './component/variables/variables.component';
import { AtributosComponent } from './component/atributos/atributos.component';
import { EstructuralesComponent } from './component/estructurales/estructurales.component';
import { HttpComponent } from './component/http/http.component';

import { MutantesService } from "./services/mutantes.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AtributosComponent,
    EstructuralesComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MutantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
