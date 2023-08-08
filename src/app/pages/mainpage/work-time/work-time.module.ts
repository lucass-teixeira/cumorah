import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkTimePageRoutingModule } from './work-time-routing.module';

import { WorkTimePage } from './work-time.page';
import { SharedComponentsModule } from 'src/app/components/shared-componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    WorkTimePageRoutingModule
  ],
  declarations: [WorkTimePage]
})
export class WorkTimePageModule {}
