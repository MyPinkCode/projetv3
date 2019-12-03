import { Component, OnInit } from '@angular/core';
import { Produits } from '../Produits';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {
  maq :Produits[];
  constructor(private produitService:ProduitService) { }
  
  ngOnInit() {
  this.maq = this.produitService.makeup;
  }
 
}
