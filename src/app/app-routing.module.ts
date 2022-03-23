import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { VariosViewsComponent } from './varios-views/varios-views.component';
import { StacksComponent } from './stacks/stacks.component';

const routes: Routes = [
  { path: "varios", component: VariosViewsComponent},
{ path: 'stacks', component: StacksComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
