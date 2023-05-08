import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ItemComponent } from './item/item.component';
import { SlidesComponent } from './slides/slides.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    TitleComponent,
    ItemComponent,
    SlidesComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    TitleComponent,
    ItemComponent,
    SlidesComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
