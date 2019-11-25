import { DetailcampaignComponent } from './../../detailcampaign/detailcampaign.component';
import { MapContactNumbersComponent } from './map-contact-numbers.component';
import { map_contact_number } from './../../models/map_contact_number';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { OneTimePasswordComponent } from './one-time-password.component';
import { SpinDestinationComponent } from './spin-destination.component';
import { SpinDestinationFailedComponent } from './spin-destination-failed.component';
import { CanActivateService } from '../../can-activate.service';

const routes: Routes = [
  {
    
    path: '',
    data: {
      title: 'Administration'
    },

    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'compaign',
        component: CardsComponent,
        canActivate:[CanActivateService],

        data: {
          title: 'compaign'
        },

      },
      {

        path: 'detailcompaign/:id',
        component: DetailcampaignComponent

      },
      {
        path: 'Gift',
        component: FormsComponent,
        data: {
          title: 'Gift'
        }
      },

      {
        path: 'Configuration',
        component: CarouselsComponent,
        data: {
          title: 'Configuration'
        }
      },
      {
        path: 'Failure',
        component: CollapsesComponent,
        data: {
          title: 'Failure'
        }
      },
      {
        path: 'Client',
        component: PaginationsComponent,
        data: {
          title: 'Client'
        }
      },
      {
        path: 'GIFT_TYPE',
        component: TablesComponent,
        data: {
          title: 'GIFT_TYPE'
        }
      },
      {
        path: 'USERS',
        component: TabsComponent,
        data: {
          title: 'USERS'
        }
      },
      {
        path: 'map_contact_number',
        component: MapContactNumbersComponent,
        data: {
          title: 'map_contact_number'
        }
      },
      {
        path: 'one_time_password',
        component: OneTimePasswordComponent,
        data: {
          title: 'one_time_password'
        }
      },
      {
        path: 'spin_destination',
        component: SpinDestinationComponent,
        data: {
          title: 'spin_destination'
        }
      },
      {
        path: 'Spin_destination_failed',
        component: SpinDestinationFailedComponent,
        data: {
          title: 'Spin_destination_failed'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
