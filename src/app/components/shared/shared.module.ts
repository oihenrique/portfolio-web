import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { TagComponent } from './tag/tag.component';


@NgModule({
  declarations: [
    BtnPrimaryComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnPrimaryComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    TagComponent
  ]
})
export class SharedModule { }
