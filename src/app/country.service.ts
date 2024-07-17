import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private jsonUrl = 'assets/countries.json';
  constructor(private http: HttpClient) { }
  getCountries(): Observable<any>{
    return this.http.get<any>(this.jsonUrl);
  }
}
