import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Book } from './book.model';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";
@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(environment.host + environment.allBooks)
      .map(r => r.json());
  }

  getBook(id: number): Observable<Book> {
    return this.http.get(environment.host + environment.allBooks)
      .map(r => r.json().filter( book => book.id === id)[0]);
  }

  getGenres(): Observable<string[]> {
    return this.http.get(environment.host + environment.allGenres)
      .map(r => r.json());
  }
}
