import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './_shared/base/base.component';


const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full'},
  { path: 'base', component: BaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
