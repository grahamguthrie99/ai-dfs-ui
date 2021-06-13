import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
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
    MatToolbarModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatTableModule
  ],
  providers: [
    ScraperService,
    {
      provide: APP_INITIALIZER,
      useFactory: (scraperService: ScraperService) => () => scraperService.loadProperties(),
      deps: [ScraperService],
      multi: true
    }, 
    { 
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'} 
    }
  ], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], 
  bootstrap: [AppComponent]
})
export class AppModule { }