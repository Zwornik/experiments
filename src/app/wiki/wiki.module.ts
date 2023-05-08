import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WikiRoutingModule } from './wiki-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { WikiService } from './wiki.service';

import { WikiHomeComponent } from './wiki-home/wiki-home.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    WikiHomeComponent,
    SearchComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [WikiService],
  bootstrap: []
})
export class WikiModule { }
