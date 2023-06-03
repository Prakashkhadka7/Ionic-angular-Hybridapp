import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inspiration-list',
    loadChildren: () =>
      import('./inspiration-list/inspiration-list.module').then(
        (m) => m.InspirationListPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'inspiration-details/:id',
    loadChildren: () =>
      import('./inspiration-detail/inspiration-detail.module').then(
        (m) => m.InspirationDetailPageModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
