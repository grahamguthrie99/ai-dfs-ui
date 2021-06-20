import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {StepperOrientation} from '@angular/material/stepper';
import { ScraperService } from '../services/scraper/scraper-api.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css']
})
export class FormWrapperComponent implements OnInit {

  date: string; 
  sports: []; 
  platforms: []; 
  providers: []; 
  playerList: [] = [];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required], 
    secondCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(public scraperService: ScraperService, private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) { 
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

  }

  ngOnInit(): void {
    this.sports = this.scraperService.getSports(); 
    this.platforms = this.scraperService.getPlatforms(); 
    this.providers = this.scraperService.getProviders(); 
  }

  fetchPlayers(){
    this.scraperService.getPlayerList().subscribe(playerList => this.playerList = playerList)
  }

  generateLineups(){
    window.alert("Lineups generate"); 
  }

}
