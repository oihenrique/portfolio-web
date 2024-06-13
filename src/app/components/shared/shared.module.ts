import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    BtnPrimaryComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnPrimaryComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent
  ]
})
export class SharedModule { }
