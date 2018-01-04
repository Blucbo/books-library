import { Component, OnInit } from '@angular/core';
import {Writer} from "./writer.model";
import {WritersService} from "./writers.service";

@Component({
  selector: 'blib-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.scss'],
  providers: [WritersService]
})
export class WritersComponent implements OnInit {
  writers: Writer[];

  constructor(
    private WritersService: WritersService
  ) { }

  ngOnInit() {
    this.WritersService.getWriters().subscribe(
      result => this.writers = result,
    );
  }

}
