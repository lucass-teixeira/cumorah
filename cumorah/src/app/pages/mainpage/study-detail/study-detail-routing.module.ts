import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyDetailPage } from './study-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StudyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyDetailPageRoutingModule {}
