import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimezoneComponent } from './timezone.component';
import { TimezoneRoutingModule } from './timezone-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    TimezoneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TimezoneRoutingModule
  ]
})
export class TimezoneModule { }
