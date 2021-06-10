import { Component } from '@angular/core';
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

  constructor(public scraperService: ScraperService) {
    // this.date = scraperService.getDate();
    this.sports = scraperService.getSports(); 
    this.platforms = scraperService.getPlatforms(); 
    this.providers = scraperService.getProviders(); 
  }
}
