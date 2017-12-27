import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes,  RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
