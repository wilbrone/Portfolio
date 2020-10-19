import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './components/mainpage/mainpage.component';
import { DesignsComponent } from './components/designs/designs.component';

const routes: Routes = [
  {component: MainpageComponent, path: ''},
  {component: DesignsComponent, path:'designs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
