import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ItemComponent } from './item/item.component';
import { SlidesComponent } from './slides/slides.component';



@NgModule({
  declarations: [
    TitleComponent,
    ItemComponent,
    SlidesComponent,
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    TitleComponent,
    ItemComponent,
    SlidesComponent,
  ]
})
export class SharedModule { }
