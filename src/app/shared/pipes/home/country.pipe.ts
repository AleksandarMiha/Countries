import { Pipe, PipeTransform } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(country:any, searchTerm: string): HomeComponent { 
    if (!country || !searchTerm) {
      return country;
    }
    return country.filter(country =>
      country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
