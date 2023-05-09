import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperHomeComponent } from './exper-home/exper-home.component';
import { CarComponent } from './car/car.component';
import { VegeComponent } from './vege/vege.component';
import { MoonComponent } from './moon/moon.component';
import { TyreComponent } from './tyre/tyre.component';


const routes: Routes = [
  {path:'', component: ExperHomeComponent,
children: [{path: '', component: CarComponent},
{path: 'vege', component: VegeComponent},
{path: 'moon', component: MoonComponent},
{path: 'tyre', component: TyreComponent}],
}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentsRoutingModule { }
