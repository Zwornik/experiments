import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsHomeComponent } from './forms-home/forms-home.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    FormsHomeComponent,
    CardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
  ]
})
export class FormsModule { }
