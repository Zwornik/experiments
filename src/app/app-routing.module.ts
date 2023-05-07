import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', loadChildren:() => import('./games/games.module').then(m => m.GamesModule)},






{path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
