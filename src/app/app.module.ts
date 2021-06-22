import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatChipsModule} from '@angular/material/chips'
import { ScraperService } from './services/scraper/scraper-api.service';
import { PlayerTableComponent } from './player-table/player-table.component';
import { LineupDisplayComponent } from './lineup-display/lineup-display.component';
import { BaseComponent } from './_shared/base/base.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerTableComponent,
    LineupDisplayComponent,
    BaseComponent,
    HeaderComponent,
    FormWrapperComponent,
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
    MatTableModule, 
    MatStepperModule, 
    ReactiveFormsModule, 
    FormsModule, 
    MatPaginatorModule, 
    MatChipsModule, 
    MatIconModule, 
    MatInputModule, 
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