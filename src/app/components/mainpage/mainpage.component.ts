import { Component, OnInit } from '@angular/core';

import {ThemePalette} from '@angular/material/core';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  // COME BACK AND RESTRUCTURE THIS SECTION

  // color: ThemePalette = 'primary';
  // // mode: ProgressBarMode = 'determinate';
  // // value: number;
  // matTooltip = '85%';
  // value = 85;

  // value1 = 80;
  // matTooltip1 = '80%';

  // value2 = 90;
  // matTooltip2 = '90%';

  // value3 = 80;
  // matTooltip3 = '80%';

  // bufferValue = 100;

  // formatLabel(value: number) {
  //   return value + '%';
  // }
  ngOnInit() {
  }

}
