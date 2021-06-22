import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneticAlgorithmService {

  private PRODUCTION_URL = "https://ai-dfs-genetic-algorithm.herokuapp.com/api/v1"

  private GENERATE_LINEUPS_URL= "/runGeneticAlgorithm"

  lineups: []

  constructor(private httpClient: HttpClient) { }

  generateLineups(body: any): Observable<any> {
    return this.httpClient.post(this.PRODUCTION_URL + this.GENERATE_LINEUPS_URL, body)
      .pipe(tap((response) => this.lineups = response as any))
  }
}