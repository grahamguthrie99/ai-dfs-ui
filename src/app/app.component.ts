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

  constructor(public scraperService: ScraperService) {}

}
