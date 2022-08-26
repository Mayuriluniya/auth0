import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ExternalApi2Component } from './pages/external-api2/external-api2.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ExternalApi3Component } from './pages/external-api3/external-api3.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api2',
    component: ExternalApi2Component,
    canActivate: [AuthGuard],

  },
  // {
  //   path: 'todolist',
  //   component:ExternalApi3Component,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'lists',component:TaskViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lists/:listId',component:TaskViewComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'new-list',component:NewListComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'lists/:listId/new-task',component:NewTaskComponent ,
    canActivate: [AuthGuard]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
