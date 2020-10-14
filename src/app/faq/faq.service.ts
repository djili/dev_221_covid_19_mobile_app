import { Injectable } from '@angular/core';
import { faq } from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqs: faq[] = [
    {
      title: 'FOIRE AUX QUESTIONS',
      langueId : 'l0',
      questions: [{question:"Le Corona Virus, existe-t-il au Sénégal ?",
                  reponse:"Oui, le Corona Virus existe bel et bien au Sénégal. Le 17 Mars 2020, le Ministère de la Santé et de l'Action Sociale du Sénégal avait dénombré 26 sur l'ensemble du territoire.",
                  sound :""},
                  {question:"Quels sont les symptômes du COVID-19 ?",
                  reponse:"Selon l’OMS, les symptômes les plus courants de la COVID-19 sont la fièvre, la fatigue et une toux sèche. Certains patients présentent des douleurs, une congestion nasale, un écoulement nasal, des maux de gorge ou une diarrhée. Ces symptômes sont généralement bénins et apparaissent de manière progressive. Certaines personnes, bien qu’infectées, ne présentent aucun symptôme et se sentent bien. La plupart (environ 80 %) des personnes guérissent sans avoir besoin de traitement particulier. Environ une personne sur six contractant la maladie présente des symptômes plus graves, notamment une dyspnée. Les personnes âgées et celles qui ont d’autres problèmes de santé (hypertension artérielle, problèmes cardiaques ou diabète) ont plus de risques de présenter des symptômes graves. Toute personne qui a de la fièvre, qui tousse et qui a des difficultés à respirer doit rester chez elle, éviter tout contact avec les gens, et appeler l'un des numéros d'urgence mis à disposition par le ministère de la santé.",
                  sound :""},
                  {question:"Comment puis-je me protéger et éviter que la maladie ne se propage ?",
                  reponse:"Vous pouvez réduire le risque d’être infecté ou de propager le COVID-19 en respectant ces conseils de l’Organisation Mondiale de la Santé (OMS):Se laver fréquemment et soigneusement les mains avec une solution hydroalcoolique ou à l’eau et au savon. Maintenir une distance d’au moins un mètre avec les autres personnes qui toussent ou qui éternuent. Éviter de se toucher les yeux, le nez et la bouche. Veillez à respecter les règles d’hygiène respiratoire et à ce que les personnes autour de vous en fassent autant. En cas de toux ou d’éternuement, il faut se couvrir la bouche et le nez avec le pli du coude, ou avec un mouchoir et jeter le mouchoir immédiatement après. Si vous ne vous sentez pas bien, restez chez vous. En cas de fièvre, de toux et de dyspnée, contactez un médecin et suivez ses recommandations. Restez à l'écoute des instructions des autorités sanitaires locales.",
                  sound :""},
                  {question:"Dois-je porter un masque pour me protéger ?",
                  reponse:"L’OMS recommande de faire un usage rationnel des masques médicaux afin d’éviter le gaspillage de ressources précieuses et l’utilisation abusive. Il est donc conseillé de porter un masque que si l'on présente des symptômes de la COVID-19 (en particulier, la toux) ou si l'on s’occupe de quelqu’un susceptible d’être atteint de la maladie. Il est aussi important de noter que les masques jetables sont à usage unique.",
                  sound :""}
                ]
    }
  ];
  constructor() { }

  
    getFaq(langueId: string){
      return this.faqs.find(faqs => {
        return faqs.langueId === langueId;
      });
    }

}
