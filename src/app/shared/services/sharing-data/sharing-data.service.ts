import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  public latestCountry: any = null; 
  selectedCountry$ = new BehaviorSubject<any>(this.latestCountry);
  country$ = this.selectedCountry$.asObservable();
  
  constructor() { }

  selectedCountry(country){
    this.latestCountry = country; 
    this.selectedCountry$.next(country);
  }
}
