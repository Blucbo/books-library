import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatListModule,} from "@angular/material";
import { MatTooltipModule } from '@angular/material/tooltip';

import { WritersRoutingModule } from './writers-routing.module';
import { WriterComponent } from './writer/writer.component';
import { WritersComponent } from './writers.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    WritersRoutingModule
  ],
  declarations: [WriterComponent, WritersComponent]
})
export class WritersModule { }
