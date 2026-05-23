import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
    url:string ='https://restcountries.com/v3.1/alpha/IN';

  constructor(private http:HttpClient) {}
  getCountryData():Observable<any>{
    return this.http.get(this.url);

  }
}
