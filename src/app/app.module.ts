import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './components/shared/shared.module';
import { AutomatedReportsComponent } from './components/projects/automated-reports/automated-reports.component';
import { DoItForLifeComponent } from './components/projects/do-it-for-life/do-it-for-life.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomatedReportsComponent,
    DoItForLifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
