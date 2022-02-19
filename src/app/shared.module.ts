import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    ButtonModule,
    DropdownModule
  ],
  exports: [
    FormsModule,
    ButtonModule,
    DropdownModule
  ]
})
export class SharedModule { }
