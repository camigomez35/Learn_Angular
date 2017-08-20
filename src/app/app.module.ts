import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { VariablesComponent } from './component/variables/variables.component';
import { AtributosComponent } from './component/atributos/atributos.component';
import { EstructuralesComponent } from './component/estructurales/estructurales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AtributosComponent,
    EstructuralesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
