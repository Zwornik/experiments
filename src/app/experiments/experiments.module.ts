import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentsRoutingModule } from './experiments-routing.module';
import { ExperHomeComponent } from './exper-home/exper-home.component';
import { VegeComponent } from './vege/vege.component';
import { MoonComponent } from './moon/moon.component';
import { TyreComponent } from './tyre/tyre.component';
import { CarComponent } from './car/car.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { AccordComponent } from './accord/accord.component';


@NgModule({
  declarations: [
    ExperHomeComponent,
    VegeComponent,
    MoonComponent,
    TyreComponent,
    CarComponent,
    TabsComponent,
    TableComponent,
    AccordComponent,
  ],
  imports: [
    CommonModule,
    ExperimentsRoutingModule,
    SharedModule,
  ]
})
export class ExperimentsModule { }
