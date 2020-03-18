import { Component, OnInit } from '@angular/core';

import {ThemePalette} from '@angular/material/core';
// import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  // COME BACK AND RESTRUCTURE THIS SECTION 

  color: ThemePalette = 'primary';
  // mode: ProgressBarMode = 'determinate';
  value = 50;
  matTooltip = '50%';
  value1 = 70;
  matTooltip1 = '70%';
  bufferValue = 100;

  formatLabel(value: number) {
    return value + '%';
  }
  ngOnInit() {
  }

}
