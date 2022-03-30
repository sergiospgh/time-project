import { NgModule } from '@angular/core';

import { TimezoneComponent } from './timezone.component';
import { TimezoneRoutingModule } from './timezone-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    TimezoneComponent
  ],
  imports: [
    SharedModule,
    TimezoneRoutingModule
  ]
})
export class TimezoneModule { }
