import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspirationListPage } from './inspiration-list.page';

const routes: Routes = [
  {
    path: '',
    component: InspirationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspirationListPageRoutingModule {}
