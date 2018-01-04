import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../books.service";
import {Book} from "../book.model";

@Component({
  selector: 'blib-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BooksService]
})
export class BookComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.booksService
      .getBook(
        Number(this.route.snapshot.params['id']))
      .subscribe(
        result => this.book = result,
      );
  }

}
