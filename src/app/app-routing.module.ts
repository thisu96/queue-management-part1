import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomPageComponent } from './views/welcom-page/welcom-page.component';

const routes: Routes = [
  {path: 'welcom-page', component: WelcomPageComponent},
  {path: '', pathMatch: 'full', redirectTo: '/welcom-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
