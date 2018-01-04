import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { BooksService } from "./books.service";
import {Book} from "./book.model";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'blib-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {
  selectedGenre: string;
  books: Book[];
  genres = ['all'];
  constructor(
    private route: ActivatedRoute,
    private routerNav: Router,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.selectedGenre = this.route.snapshot.queryParams['genre'] || this.genres[0];
    this.booksService.getBooks().subscribe(
      result => this.books = result,
    );
    this.booksService.getGenres().subscribe(
      result => this.genres = [].concat(this.genres, result),
    );
  }


  selectionChange(event) {
    this.routerNav.navigate(['/books'],
      {queryParams: {genre: event.value}});
  }
}
