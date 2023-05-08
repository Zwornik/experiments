import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonsHomeComponent } from './pythons-home/pythons-home.component';

const routes: Routes = [{ path: '', component: PythonsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PythonsRoutingModule {}
