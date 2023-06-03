import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspirationDetailPageRoutingModule } from './inspiration-detail-routing.module';

import { InspirationDetailPage } from './inspiration-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InspirationDetailPageRoutingModule,
  ],
  declarations: [InspirationDetailPage],
})
export class InspirationDetailPageModule {}
