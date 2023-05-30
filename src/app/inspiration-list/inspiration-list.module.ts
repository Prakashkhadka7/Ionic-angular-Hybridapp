import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspirationListPageRoutingModule } from './inspiration-list-routing.module';

import { InspirationListPage } from './inspiration-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspirationListPageRoutingModule
  ],
  declarations: [InspirationListPage]
})
export class InspirationListPageModule {}
