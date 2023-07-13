import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorDetailPageRoutingModule } from './mentor-detail-routing.module';

import { MentorDetailPage } from './mentor-detail.page';
import { SharedComponentsModule } from 'src/app/components/shared-componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorDetailPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MentorDetailPage]
})
export class MentorDetailPageModule {}
