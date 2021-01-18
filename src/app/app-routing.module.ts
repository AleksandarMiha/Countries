import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCountryComponent } from './pages/single-country/single-country.component';



const routes: Routes = [
  { path: '', component: HomeComponent,}, 
  { path: 'country/:title', component: SingleCountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
