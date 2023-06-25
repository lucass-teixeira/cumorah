import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpagePage } from './mainpage.page';

const routes: Routes = [
  {
    path: '',
    component: MainpagePage,
    children: [
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'study',
        loadChildren: () => import('./study/study.module').then(m => m.StudyPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentPageModule)
      },
      {
        path: 'student/:id',
        loadChildren: () => import('./student-detail/student-detail-routing.module').then(m => m.StudentDetailPageRoutingModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
    ],



  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentPageModule)
  },
  {
    path: 'student-detail',
    loadChildren: () => import('./student-detail/student-detail.module').then(m => m.StudentDetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainpagePageRoutingModule { }
