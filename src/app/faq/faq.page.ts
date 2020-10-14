import { Component, OnInit } from '@angular/core';
import { faq } from './faq.model';
import { FaqService } from './faq.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqs : faq;
  constructor(private activatedRoute: ActivatedRoute,
              private faqService: FaqService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('langueId')){
        return ;
      }
      const langueId = paramMap.get('langueId');
      this.faqs = this.faqService.getFaq(langueId);
    });
  }

}

