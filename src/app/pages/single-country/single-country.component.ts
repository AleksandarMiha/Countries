import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharingDataService } from 'src/app/shared/services/sharing-data/sharing-data.service';
import { Subject} from 'rxjs'; 
import { takeUntil } from 'rxjs/operators';
import { populationWithDot } from  'src/app/shared/utilities/globalFunction';
@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss']
})
export class SingleCountryComponent implements OnInit, OnDestroy {
  country: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  dotInPopulation: any = populationWithDot;
  constructor(
    private sharingDataService: SharingDataService
  ) { }

  ngOnInit(): void {
    this.getSelectedCountry(); 
  }

  getSelectedCountry(){
    this.sharingDataService.selectedCountry$
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data => {  
         this.country = data 
      },
      err => console.log(err)
    )
  }
 

  ngOnDestroy() {
    this.destroy$.next(true); 
    this.destroy$.unsubscribe();
  }

}
