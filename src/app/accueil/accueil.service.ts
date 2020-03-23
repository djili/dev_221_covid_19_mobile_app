import { Accueil } from './accueil.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  private accueils: Accueil[] = [
    {
      title: 'ACCUEIL',
      langueId : 'l0',
      faq: 'QUESTION',
      fakeNews : 'FAKE',
      map: 'CARTE',
      call : 'URGENCE',
      diag : 'DIAGNOSTIQUE',
      prev : 'PREVENTION'
    }
  ];
  constructor() { }

  getAllAccueils(){
    return [...this.accueils];
  }

  getAccueil(langueId: string){
    return this.accueils.find(accueils => {
      return accueils.langueId === langueId;
    });
  }
}
