import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  date: string; 
  sports: []; 
  platforms: []; 
  providers: []; 
  // private DATE_URL = "http:/localhost:3000/getDate"
  private SPORTS_URL = "http://localhost:3000/getSupportedSports"
  private PLATFORMS_URL = "http://localhost:3000/getSupportedPlatforms"
  private PROVIDERS_URL =  "http://localhost:3000/getSupportedProviders" 

  constructor(public httpClient: HttpClient) { }

  // loadDate(): Promise<any> {
  //   return this.httpClient.get(this.DATE_URL)
  //     .pipe(tap((response) => this.date = response as any))
  //     .toPromise();
  // }

  loadSports(): Promise<any> {
    return this.httpClient.get(this.SPORTS_URL)
      .pipe(tap((response) => this.sports = response as any))
      .toPromise();
  }

  loadPlatforms(): Promise<any> {
    return this.httpClient.get(this.PLATFORMS_URL)
      .pipe(tap((response) => this.platforms = response as any))
      .toPromise();
  }

  loadProviders(): Promise<any> {
    return this.httpClient.get(this.PROVIDERS_URL)
      .pipe(tap((response) => this.providers = response as any))
      .toPromise();
  }

  loadProperties(): Promise<any> {
    // return Promise.all([this.loadDate(), this.loadSports(), this.loadPlatforms(), this.loadProviders()])
    return Promise.all([this.loadSports(), this.loadPlatforms(), this.loadProviders()])
  }

  getDate(): string{
    return this.date;
  }

  getSports(): []{
    return this.sports;
  }

  getPlatforms(): []{
    return this.platforms;
  }
  getProviders(): []{
    return this.providers;
  }

}