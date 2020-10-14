export  interface faq{
    title : string;
    langueId : string;
    questions : faqItem[];
}

export  interface faqItem{
    question : string;
    reponse : string;
    sound : string;
}