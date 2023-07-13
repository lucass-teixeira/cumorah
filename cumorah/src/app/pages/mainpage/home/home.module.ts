import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePage } from './home.page';
import { SharedComponentsModule } from 'src/app/components/shared-componente.module';
import { FilterSearchPipe } from 'src/app/pipes/filter-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
