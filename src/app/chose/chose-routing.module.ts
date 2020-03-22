import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChosePage } from './chose.page';

const routes: Routes = [
  {
    path: '',
    component: ChosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChosePageRoutingModule {}
