import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyDetailPageRoutingModule } from './study-detail-routing.module';

import { StudyDetailPage } from './study-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyDetailPageRoutingModule
  ],
  declarations: [StudyDetailPage]
})
export class StudyDetailPageModule {}
