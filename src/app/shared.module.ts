import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    ButtonModule,
    DropdownModule,
    MenubarModule
  ],
  exports: [
    FormsModule,
    ButtonModule,
    DropdownModule,
    MenubarModule
  ]
})
export class SharedModule { }
