import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkTimePage } from './work-time.page';

const routes: Routes = [
  {
    path: '',
    component: WorkTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkTimePageRoutingModule {}
