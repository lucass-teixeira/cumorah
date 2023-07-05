import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkTimePageRoutingModule } from './work-time-routing.module';

import { WorkTimePage } from './work-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkTimePageRoutingModule
  ],
  declarations: [WorkTimePage]
})
export class WorkTimePageModule {}
