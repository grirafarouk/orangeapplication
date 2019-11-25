import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AppService } from '../../app.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule  {
  
  ngOnInit() {


}}
