import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDetailPageRoutingModule } from './student-detail-routing.module';

import { StudentDetailPage } from './student-detail.page';
import { LinkedinPipe } from 'src/app/pipes/linkedin.pipe';
import { SharedComponentsModule } from 'src/app/components/shared-componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentDetailPageRoutingModule,
  ],
  declarations: [StudentDetailPage, LinkedinPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class StudentDetailPageModule {}
