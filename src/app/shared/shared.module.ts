import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title/title.component';
import { ItemComponent } from './item/item.component';
import { SlidesComponent } from './slides/slides.component';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    TitleComponent,
    ItemComponent,
    SlidesComponent,
    ModalComponent,
    TabComponent,
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    TitleComponent,
    ItemComponent,
    SlidesComponent,
    ModalComponent,
    TabComponent,
  ]
})
export class SharedModule { }
