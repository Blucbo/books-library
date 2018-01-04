import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'books', loadChildren: './books/books.module#BooksModule' },
  { path: 'writers', loadChildren: './writers/writers.module#WritersModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
