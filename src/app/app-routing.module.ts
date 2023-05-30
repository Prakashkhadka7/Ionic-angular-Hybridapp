import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'inspiration-list',
    loadChildren: () => import('./inspiration-list/inspiration-list.module').then( m => m.InspirationListPageModule)
  },
  {
    path: 'inspiration-detail',
    loadChildren: () => import('./inspiration-detail/inspiration-detail.module').then( m => m.InspirationDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
