import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspirationDetailPageRoutingModule } from './inspiration-detail-routing.module';

import { InspirationDetailPage } from './inspiration-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspirationDetailPageRoutingModule
  ],
  declarations: [InspirationDetailPage]
})
export class InspirationDetailPageModule {}
