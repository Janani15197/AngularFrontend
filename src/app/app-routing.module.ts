import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

const routes: Routes = [
  {
    path:'',
  redirectTo:'/events',
  pathMatch:'full'

  },
  {
    path:'login',
  component:LoginComponent
  },
  {
    path:'register',
  component:RegisterComponent
  }
  ,
  {
    path:'events',
  component:EventsComponent
  },
  {
    path:'special-events',
  component:SpecialEventsComponent,
  canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
