import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Charts2Component } from './charts2.component';

const routes: Routes = [
  {
    path: '',
    component: Charts2Component,
    data: {
      title: 'Gift_Statistique'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJS2RoutingModule {}
