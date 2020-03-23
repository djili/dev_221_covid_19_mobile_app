import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguePage } from './langue.page';

const routes: Routes = [
  {
    path: '',
    component: LanguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguePageRoutingModule {}
