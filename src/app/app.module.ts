import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScraperService } from './services/scraper/scraper-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatToolbarModule
  ],
  providers: [
    ScraperService,
    {
      provide: APP_INITIALIZER,
      useFactory: (scraperService: ScraperService) => () => scraperService.loadProperties(),
      deps: [ScraperService],
      multi: true
    }
], 
  bootstrap: [AppComponent]
})
export class AppModule { }