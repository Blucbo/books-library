import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BooksRoutingModule } from './books-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    BooksRoutingModule
  ],
  declarations: [BooksComponent, BookComponent]
})
export class BooksModule { }
