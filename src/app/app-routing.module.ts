import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page.component';
import { CareProgramComponent } from './care-program.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'care', component: CareProgramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
