import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TestPage } from '../test/test.page';

@Component({
  selector: 'app-chose',
  templateUrl: './chose.page.html',
  styleUrls: ['./chose.page.scss'],
})
export class ChosePage {

  constructor(private modalController: ModalController) {}
  async openModal() {
    const modal = await this.modalController.create({
      component: TestPage
    });
    return await modal.present();
  }

}
