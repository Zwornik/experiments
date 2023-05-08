import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pythons',
    loadChildren: () =>
      import('./pythons/pythons.module').then((m) => m.PythonsModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
