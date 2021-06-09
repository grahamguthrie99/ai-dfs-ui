import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScraperAPIService {

  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(this.SERVER_URL);  
	}  
}