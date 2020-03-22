import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private modalController: ModalController, private callNumber: CallNumber) {}
  ngOnInit() {}
  async closeModal() {
    await this.modalController.dismiss();
  }

  callNow(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
