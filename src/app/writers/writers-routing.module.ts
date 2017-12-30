import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WritersComponent } from "./writers.component";
import { WriterComponent } from './writer/writer.component'

const routes: Routes = [
  { path: '', component: WritersComponent },
  { path: ':id', component: WriterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritersRoutingModule { }