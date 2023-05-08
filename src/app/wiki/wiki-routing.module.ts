import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiHomeComponent } from './wiki-home/wiki-home.component';

const routes: Routes = [{path: '', component: WikiHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
