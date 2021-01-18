import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/shared/services/api/home.service';
import { SharingDataService } from 'src/app/shared/services/sharing-data/sharing-data.service';
import { Subject} from 'rxjs'; 
import { takeUntil, count } from 'rxjs/operators';
import { populationWithDot } from 'src/app/shared/utilities/globalFunction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  countries: any[] = [];
  searchTerm: string = '';
  destroy$: Subject<boolean> = new Subject<boolean>();
  regions: any;
  filteredCountry: any[] = [];
  dotInPopulation: any = populationWithDot;

  constructor(
    private homeService: HomeService,
    private sharingDataService: SharingDataService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  receivedMessage(searchMessage){
    if (searchMessage) { this.searchTerm = searchMessage; } 
  }

  receivedRegion(selectedRegion){ 
    if(selectedRegion) { 
      if(selectedRegion === 'all') this.getCountries();
      this.filteredCountry = this.countries.filter(country => country.region == selectedRegion);
     }
  }
  
  getCountries(){
    this.homeService.getAllCountries()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data => {
      this.countries = data;
      this.filteredCountry = data;
      // unique regions without empty string
      this.regions =  [...new Set(this.countries.map(country => country.region).filter(Boolean))]   
      },
      err => console.log(err)
    )
  }
 

selectedCountry(country) { 
  this.sharingDataService.selectedCountry(country); 
}

ngOnDestroy() {
  this.destroy$.next(true); 
  this.destroy$.unsubscribe();
}

}
