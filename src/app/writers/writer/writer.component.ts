import { Component, OnInit } from '@angular/core';
import {Writer} from "../writer.model";
import {WritersService} from "../writers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'blib-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss'],
  providers: [WritersService]
})
export class WriterComponent implements OnInit {
  writer: Writer;
  constructor(
    private route: ActivatedRoute,
    private writersService: WritersService
  ) { }

  ngOnInit() {
    this.writersService
      .getWriter(
        Number(this.route.snapshot.params['id']))
      .subscribe(
        result => this.writer = result,
      );
  }

}
