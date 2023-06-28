import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-bar',
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.css']
})
export class StatsBarComponent implements OnInit {
  @Input() percentage: number = 0;
  @Input() color: string = '#888';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
