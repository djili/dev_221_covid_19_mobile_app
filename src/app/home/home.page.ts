import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ContactPage } from '../contact/contact.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}
  async openModal() {
    const modal = await this.modalController.create({
      component: ContactPage
    });
    return await modal.present();
  }


}
