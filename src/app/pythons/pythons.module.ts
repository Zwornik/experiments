import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PythonsRoutingModule } from './pythons-routing.module';
import { PythonsHomeComponent } from './pythons-home/pythons-home.component';

@NgModule({
  declarations: [PythonsHomeComponent],
  imports: [CommonModule, PythonsRoutingModule, SharedModule],
})
export class PythonsModule {}
