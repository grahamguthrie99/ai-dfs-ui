import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ScraperService } from './services/scraper/scraper-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "ui"
  date: string; 
  sports: []; 
  platforms: []; 
  providers: []; 
  playerList: [] = [];


  displayedColumns: string[] = ['id', 'position', 'name', 'inj', 'salary', 'ppg_proj', 'value_proj'];

  constructor(public scraperService: ScraperService) {
    // this.date = scraperService.getDate();
    this.sports = scraperService.getSports(); 
    this.platforms = scraperService.getPlatforms(); 
    this.providers = scraperService.getProviders(); 
    
  }

  fetchPlayers(){
    this.scraperService.getPlayerList().subscribe(playerList => this.playerList = playerList)
  }

}
