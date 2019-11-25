import { OneTimePasswordComponent } from './one-time-password.component';
import { MapContactNumbersComponent } from './map-contact-numbers.component';
// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NotifierModule, NotifierOptions } from 'angular-notifier';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { SpinDestinationComponent } from './spin-destination.component';
import { SpinDestinationFailedComponent } from './spin-destination-failed.component';
import { DetailcampaignComponent } from '../../detailcampaign/detailcampaign.component';
const notifierDefaultOptions: NotifierOptions = {
    position: {
      horizontal: {
        position: 'right',
        distance: 12
      },
      vertical: {
        position: 'top',
        distance: 12,
        gap: 10
      }
    },
    theme: 'material',
    behaviour: {
      autoHide: 3000,
      onClick: false,
      onMouseover: 'pauseAutoHide',
      showDismissButton: true,
      stacking: 4
    },
    animations: {
      enabled: true,
      show: {
        preset: 'slide',
        speed: 300,
        easing: 'ease'
      },
      hide: {
        preset: 'fade',
        speed: 300,
        easing: 'ease',
        offset: 50
      },
      shift: {
        speed: 300,
        easing: 'ease'
      },
      overlap: 150
    }
  };  
@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    BaseRoutingModule,
    NgxPaginationModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    NotifierModule.withConfig(notifierDefaultOptions),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    MapContactNumbersComponent,
    DetailcampaignComponent,
    OneTimePasswordComponent,
    SpinDestinationComponent,
    SpinDestinationFailedComponent,
    ProgressComponent,
    TooltipsComponent
  ]
})
export class BaseModule { }
