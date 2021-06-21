import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneticAlgorithmAPIService {

  private PRODUCTION_URL = "https://ai-dfs-genetic-algorithm.herokuapp.com/api/v1/"
  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(this.SERVER_URL);  
	}  
}