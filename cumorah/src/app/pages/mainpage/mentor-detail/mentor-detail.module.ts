import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorDetailPageRoutingModule } from './mentor-detail-routing.module';

import { MentorDetailPage } from './mentor-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorDetailPageRoutingModule
  ],
  declarations: [MentorDetailPage]
})
export class MentorDetailPageModule {}
