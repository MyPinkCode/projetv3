import { Component, OnInit } from '@angular/core';
import { Produits } from '../application/Produits';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../application/produit.service';
@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  p:Produits;
  constructor(private activatedRoute:ActivatedRoute,private produitService:ProduitService) { }
  
  ngOnInit() {
    if(this.produitService.getDressByID(this.activatedRoute.snapshot.params['ref'])!=null)
 this.p = this.produitService.getDressByID(this.activatedRoute.snapshot.params['ref']);
 else 
 this.p = this.produitService.getMakeupByID(this.activatedRoute.snapshot.params['ref']);
  }
 

}
