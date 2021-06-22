import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { StepperOrientation } from '@angular/material/stepper';
import { ScraperService } from '../services/scraper/scraper-api.service';
import { map } from 'rxjs/internal/operators/map';
import { GeneticAlgorithmService } from '../services/genetic-algorithm/genetic-algorithm-api.service';


export interface Player {
  name: string;
  date: string;
  fn: string;
  id: number;
  inj: string;
  ln: string;
  pos: string;
  ppg_proj: number;
  salary: number;
  team: string;
  value_proj: number; 
}

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css']
})
export class FormWrapperComponent implements OnInit {

  date: string; 
  sports: []; 
  sport: string; 
  platforms: []; 
  platform: string; 
  providers: []; 
  playerList: Player[];
  lineupList: []; 
  population: number; 
  generations: number; 
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  loading = true; 

  configurationFormGroup = this._formBuilder.group({
    platformCtrl: ['', Validators.required], 
    sportCtrl: ['', Validators.required]
  });
  playerFormGroup = this._formBuilder.group({
    playersCtrl: ['']
  });
  gaFormGroup = this._formBuilder.group({
    populationCtrl: ['', Validators.required], 
    generationCtrl: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(public scraperService: ScraperService, public gaService: GeneticAlgorithmService, private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) { 
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

  }

  ngOnInit(): void {
    this.date = this.scraperService.getDate()
    this.sports = this.scraperService.getSports(); 
    this.platforms = this.scraperService.getPlatforms(); 
    this.providers = this.scraperService.getProviders(); 
  }

  fetchPlayers(){
    this.platform = this.configurationFormGroup.get('platformCtrl')?.value
    this.sport = this.configurationFormGroup.get('sportCtrl')?.value
    this.scraperService.getPlayerList("DailyFantasyFuel", this.configurationFormGroup.get('platformCtrl')?.value, this.configurationFormGroup.get('sportCtrl')?.value, this.date).subscribe(playerList => this.playerList = playerList)
  }


  removePlayer(player: Player): void {
    const index = this.playerList.indexOf(player);
    if (index >= 0) {
      this.playerList.splice(index, 1);
    }
  }

  generateLineups(){
    const body = {
      player_list: this.playerList, 
      parameters: {
        generation_count: this.gaFormGroup.get('generationCtrl')?.value, 
        population_size: this.gaFormGroup.get('populationCtrl')?.value, 
        platform: this.platform, 
        sport: this.sport
      }
    }
    this.gaService.generateLineups(body).subscribe(lineupList => this.lineupList = lineupList)
    console.log(this.lineupList)
  }
}
