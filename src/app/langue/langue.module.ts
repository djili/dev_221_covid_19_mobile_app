import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguePageRoutingModule } from './langue-routing.module';

import { LanguePage } from './langue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguePageRoutingModule
  ],
  declarations: [LanguePage]
})
export class LanguePageModule {}
