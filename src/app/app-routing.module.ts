import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UniformixComponent } from './components/projects/uniformix/uniformix.component';
import { AutomatedReportsComponent } from './components/projects/automated-reports/automated-reports.component';
import { SunsetHotelComponent } from './components/projects/sunset-hotel/sunset-hotel.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects/uniformix', component: UniformixComponent},
  { path: 'projects/automatedReports', component: AutomatedReportsComponent},
  { path: 'projects/sunsetHotel', component: SunsetHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
