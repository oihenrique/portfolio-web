import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BtnPrimaryComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnPrimaryComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
