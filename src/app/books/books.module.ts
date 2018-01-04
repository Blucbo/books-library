import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BooksRoutingModule } from './books-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from "@angular/material/core";
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import {FilterPipe} from "../pipes/filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatRippleModule,
    BooksRoutingModule
  ],
  declarations: [BooksComponent, BookComponent, FilterPipe]
})
export class BooksModule { }
