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
        path: 'study/:id',
        loadChildren: () => import('./study-detail/study-detail.module').then( m => m.StudyDetailPageModule)
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
        path: 'mentor/:id',
        loadChildren: () => import('./mentor-detail/mentor-detail-routing.module').then(m => m.MentorDetailPageRoutingModule)
      },
      {
        path: 'work-time',
        loadChildren: () => import('./work-time/work-time.module').then( m => m.WorkTimePageModule)
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
  {
    path: 'mentor-detail',
    loadChildren: () => import('./mentor-detail/mentor-detail.module').then( m => m.MentorDetailPageModule)
  },
  {
    path: 'work-time',
    loadChildren: () => import('./work-time/work-time.module').then( m => m.WorkTimePageModule)
  },
  {
    path: 'study-detail',
    loadChildren: () => import('./study-detail/study-detail.module').then( m => m.StudyDetailPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainpagePageRoutingModule { }
