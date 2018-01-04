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
    private writersService: WritersService
  ) { }

  ngOnInit() {
    this.writersService.getWriters().subscribe(
      result => this.writers = result,
    );
  }

}
