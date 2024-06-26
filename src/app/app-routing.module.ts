import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UniformixComponent } from './components/projects/uniformix/uniformix.component';
<<<<<<< HEAD
import { AutomatedReportsComponent } from './components/projects/automated-reports/automated-reports.component';
=======
import { SunsetHotelComponent } from './components/projects/sunset-hotel/sunset-hotel.component';
>>>>>>> e69e2833eb8e9006afe64f3c072b61d37943879b

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects/uniformix', component: UniformixComponent},
<<<<<<< HEAD
  { path: 'projects/automatedReports', component: AutomatedReportsComponent}
=======
  { path: 'projects/sunsetHotel', component: SunsetHotelComponent}
>>>>>>> e69e2833eb8e9006afe64f3c072b61d37943879b
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
