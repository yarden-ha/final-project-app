import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { ParameterComponent } from './components/parameter/parameter.component';
import { ChoicesComponent } from './components/choices/choices.component';


@NgModule({
  declarations: [
    AppComponent,
    ParameterComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
