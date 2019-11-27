import { Injectable } from '@angular/core';
import { Produits } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  makeup =[
    new Produits('ROUGE À LÈVRES','e7f8','../assets/rouge.PNG', 20,true,'10/11/2019'),
    new Produits('LIP CREAM','ec18','../assets/lip_cream.PNG',12.5,true,'10/11/2019'),
    new Produits('CRAYON YEUX','imp88','../assets/crayon.PNG',35,false,'10/11/2019'),
    new Produits('CORRECTEUR', 'hp58','../assets/correcteur.PNG',56.8,true,'10/11/2019')
  ]
  dress =[
    new Produits('red flowers','v5cx64','../assets/im1.jpg', 480,true,'10/11/2019'),
    new Produits('fairy','gd66','../assets/im3.jpg',578,true,'10/11/2019'),
    new Produits('magical','zcf21','../assets/im4.jpg',320,false,'10/11/2019'),
    new Produits('princess', 'uj52','../assets/im5.jpg',600,true,'10/11/2019')
  ]
  
 constructor() { }

}
