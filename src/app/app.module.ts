import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './components/mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatTooltipModule,

    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
