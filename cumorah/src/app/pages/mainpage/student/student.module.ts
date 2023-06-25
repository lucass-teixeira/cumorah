import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import { SharedComponentsModule } from 'src/app/components/shared-componente.module';
import { FilterSearchPipe } from 'src/app/pipes/filter-search.pipe';
import { LinkedinPipe } from 'src/app/pipes/linkedin.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [StudentPage, FilterSearchPipe],
})
export class StudentPageModule {}
