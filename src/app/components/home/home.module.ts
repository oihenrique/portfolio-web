import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainSectionComponent } from '../shared/main-section/main-section.component';
import { ProjectsSectionComponent } from '../shared/projects-section/projects-section.component';
import { ContactSectionComponent } from '../shared/contact-section/contact-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
