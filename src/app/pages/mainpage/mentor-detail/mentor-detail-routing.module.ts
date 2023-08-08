import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorDetailPage } from './mentor-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MentorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorDetailPageRoutingModule {}
