import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from "./books.component";
import { BookComponent } from './book/book.component'

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: '?genre', component: BooksComponent },
  { path: ':id', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
