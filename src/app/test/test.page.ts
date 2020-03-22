import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private modalController: ModalController) {}
  ngOnInit() {}
  async closeModal() {
    await this.modalController.dismiss();
  }

  

}
