import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ParameterComponent } from './components/parameter/parameter.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { ThemeService } from './components/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    ParameterComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ThemeService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
