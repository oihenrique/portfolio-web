import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UniformixComponent } from './components/projects/uniformix/uniformix.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects/uniformix', component: UniformixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
