import { Injectable } from '@angular/core';
import { Langue } from './langue.model';

@Injectable({
  providedIn: 'root'
})
export class LangueService {
  private langues: Langue[] = [
    {
      id : 'l0',
      title: 'Français',
      disabled : false
    },
    {
      id : 'l1',
      title: 'Wolof',
      disabled : true
    },
    {
      id : 'l2',
      title: 'Pular',
      disabled : true
    },
    {
      id : 'l3',
      title: 'Sérére',
      disabled : true
    },
    {
      id : 'l4',
      title: 'Diola',
      disabled : true
    }
  ];
  constructor() { }

  getAllLangues(){
    return [...this.langues];
  }

  getLangue(langueId: string){
    return this.langues.find(langue => {
      return langue.id === langueId;
    });
  }
}
