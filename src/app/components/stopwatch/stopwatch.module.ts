import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopwatchComponent } from './stopwatch.component';
import { StopwatchRoutingModule } from './stopwatch-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    StopwatchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StopwatchRoutingModule
  ]
})
export class StopwatchModule { }
