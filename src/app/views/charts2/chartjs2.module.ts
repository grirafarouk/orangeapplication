import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { Charts2Component } from './charts2.component';
import { ChartJS2RoutingModule } from './chartjs2-routing.module';

@NgModule({
  imports: [
    ChartJS2RoutingModule,
    ChartsModule
  ],
  declarations: [ Charts2Component ]
})
export class ChartJS2Module { }
