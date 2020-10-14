import { Langue } from './langue.model';
import { LangueService } from './langue.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.page.html',
  styleUrls: ['./langue.page.scss'],
})
export class LanguePage implements OnInit {
  langues: Langue[];
  constructor(private langueService: LangueService) { }

  ngOnInit() {
    this.langues = this.langueService.getAllLangues();
  }

}
