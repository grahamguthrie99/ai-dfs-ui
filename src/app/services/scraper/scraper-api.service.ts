import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  date: string; 
  sports: []; 
  platforms: []; 
  providers: []; 
  playerList: []

  private PRODUCTION_URL = "https://ai-dfs-scraper.herokuapp.com/api/v1"
  
  private BASE_URL = this.PRODUCTION_URL; 

  private DATE_URL = "/getDate"
  private SPORTS_URL = "/getSupportedSports"
  private PLATFORMS_URL = "/getSupportedPlatforms"
  private PROVIDERS_URL =  "/getSupportedProviders" 
  private PLAYER_LIST_URL =  "/getPlayerList"

  constructor(public httpClient: HttpClient) { }

  loadDate(): Promise<any> {
    return this.httpClient.get(this.BASE_URL + this.DATE_URL)
      .pipe(tap((response) => this.date = response as any))
      .toPromise();
  }

  loadSports(): Promise<any> {
    return this.httpClient.get(this.BASE_URL + this.SPORTS_URL)
      .pipe(tap((response) => this.sports = response as any))
      .toPromise();
  }

  loadPlatforms(): Promise<any> {
    return this.httpClient.get(this.BASE_URL + this.PLATFORMS_URL)
      .pipe(tap((response) => this.platforms = response as any))
      .toPromise();
  }

  loadProviders(): Promise<any> {
    return this.httpClient.get(this.BASE_URL + this.PROVIDERS_URL)
      .pipe(tap((response) => this.providers = response as any))
      .toPromise();
  }

  loadProperties(): Promise<any> {
    return Promise.all([this.loadDate(), this.loadSports(), this.loadPlatforms(), this.loadProviders()])
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

  getPlayerList(provider: string, platform: string, sport: string, date: string): Observable<[]>  {
    return this.httpClient.get<[]>(this.BASE_URL + this.PLAYER_LIST_URL + "/" + provider + "/" + platform + "/" + sport + "/" + date)
      .pipe(tap((response) => this.playerList = response as any))
  }

}