import { AccueilService } from './accueil.service';
import { Accueil } from './accueil.model';
import { LangueService } from './../langue/langue.service';
import { Langue } from './../langue/langue.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  loadedLangue : Langue;
  accueil : Accueil;

  constructor(private activatedRoute: ActivatedRoute,
              private langueService: LangueService,
              private accueilService: AccueilService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('langueId')){
        return ;
      }
      const langueId = paramMap.get('langueId');
      this.accueil = this.accueilService.getAccueil(langueId);
      this.loadedLangue = this.langueService.getLangue(langueId);
    });
  }

}
