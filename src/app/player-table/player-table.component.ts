import { Component, Input, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  @Input()
  playerList: [] = []; 
  displayedColumns: string[] = ['id', 'position', 'name', 'team', 'inj', 'salary', 'ppg_proj', 'value_proj'];
  
 

  constructor() { }

  ngOnInit(): void {
  }

  

}
