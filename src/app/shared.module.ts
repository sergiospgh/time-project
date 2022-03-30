import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    MenubarModule
  ]
})
export class SharedModule { }
