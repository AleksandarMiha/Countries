import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_URL } from '../../../globals';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCountries(){
    return this.http.get<any[]>(`${APP_BASE_URL}/all`)
    .pipe(map(country => country.slice(0, 150)));
  }
}
