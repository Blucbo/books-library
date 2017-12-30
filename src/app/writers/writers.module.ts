import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritersRoutingModule } from './writers-routing.module';
import { WriterComponent } from './writer/writer.component';
import { WritersComponent } from './writers.component';

@NgModule({
  imports: [
    CommonModule,
    WritersRoutingModule
  ],
  declarations: [WriterComponent, WritersComponent]
})
export class WritersModule { }
