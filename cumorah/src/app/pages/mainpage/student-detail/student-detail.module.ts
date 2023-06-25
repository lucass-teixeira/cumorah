import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDetailPageRoutingModule } from './student-detail-routing.module';

import { StudentDetailPage } from './student-detail.page';
import { LinkedinPipe } from 'src/app/pipes/linkedin.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentDetailPageRoutingModule
  ],
  declarations: [StudentDetailPage, LinkedinPipe]
})
export class StudentDetailPageModule {}
