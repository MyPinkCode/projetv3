import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produits } from '../Produits';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  submitted:boolean = false;
  nom:string;prix:number;promo:boolean;
  type:string;
  maq :Produits[];
  dre :Produits[];
  onSubmit(frm:NgForm)
  {
    this.submitted =true;}
  constructor(private produitService:ProduitService) { }

  ngOnInit() {this.maq = this.produitService.makeup;
    this.dre = this.produitService.dress;
  }

}
