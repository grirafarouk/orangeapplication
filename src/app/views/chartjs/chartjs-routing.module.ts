import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';

const routes: Routes = [
  {
    path: '',
    component: ChartJSComponent,
    data: {
      title: 'Failure_Statistique'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule {}
