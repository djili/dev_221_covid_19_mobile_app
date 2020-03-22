import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChosePageRoutingModule } from './chose-routing.module';

import { ChosePage } from './chose.page';
import { TestPage } from '../test/test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChosePageRoutingModule
  ],
  declarations: [ChosePage, TestPage],
  entryComponents: [TestPage]
})
export class ChosePageModule {}
