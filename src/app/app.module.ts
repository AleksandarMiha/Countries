import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountryPipe } from './shared/pipes/home/country.pipe';
import { SingleCountryComponent } from './pages/single-country/single-country.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { DropdownFieldComponent } from './components/dropdown-field/dropdown-field.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CountryPipe,
    SingleCountryComponent,
    SearchFieldComponent,
    DropdownFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
