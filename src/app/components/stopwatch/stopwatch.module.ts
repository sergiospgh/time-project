import { NgModule } from '@angular/core';

import { StopwatchComponent } from './stopwatch.component';
import { StopwatchRoutingModule } from './stopwatch-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    StopwatchComponent
  ],
  imports: [
    SharedModule,
    StopwatchRoutingModule
  ]
})
export class StopwatchModule { }
