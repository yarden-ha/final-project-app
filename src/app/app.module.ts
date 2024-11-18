import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';


import { ParameterComponent } from './components/parameter/parameter.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { CalibirationMethodsComponent } from './calibiration-methods/calibiration-methods.component';
import { ExerciseProgramComponent } from './exercise-program/exercise-program.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpService } from './services/http.service';



@NgModule({
  declarations: [
    AppComponent,
    ParameterComponent,
    ChoicesComponent,
    CalibirationMethodsComponent,
    ExerciseProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    StepperModule
  ],
  providers: [
    provideHttpClient(),
    HttpService
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
