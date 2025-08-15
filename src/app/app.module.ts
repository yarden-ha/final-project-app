import { CareProgramComponent } from './care-program.component';
import { DialogModule } from 'primeng/dialog';
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
import { DefaultExerciseComponent } from './default-exercise/default-exercise.component';
import { TextBoxDefaultExerciseComponent } from './text-box-default-exercise/text-box-default-exercise.component';
import { WebSocketClient } from './services/websocket.service';
import { GuageComponent } from './guage/guage.component';
import { EncoderGraphComponent } from './components/encoder-graph/encoder-graph.component';
import { EngineGraphComponent } from './components/engine-graph/engine-graph.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ParameterComponent,
    ChoicesComponent,
    CalibirationMethodsComponent,
    ExerciseProgramComponent,
    DefaultExerciseComponent,
    TextBoxDefaultExerciseComponent,
    GuageComponent,
    EncoderGraphComponent,
  EngineGraphComponent,
  HomePageComponent,
  CareProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    StepperModule,
  ToolbarModule,
  MenubarModule,
  AvatarModule,
  AvatarGroupModule,
  DialogModule
  ],
  providers: [
    provideHttpClient(),
    HttpService,
    WebSocketClient
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
