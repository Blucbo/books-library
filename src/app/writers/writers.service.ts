import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Writer} from "./writer.model";
import {environment} from "../../environments/environment";

@Injectable()
export class WritersService {

  constructor(private http: Http) { }

  getWriters(): Observable<Writer[]> {
    return this.http.get(environment.host + environment.allWriters)
      .map(r => r.json());
  }

  getWriter(id: number): Observable<Writer> {
    return this.http.get(environment.host + environment.allWriters)
      .map(r => r.json().filter( writer => writer.id === id)[0]);
  }
}
