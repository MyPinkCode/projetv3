import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  myDate =  new Date().toLocaleDateString();
  constructor(private produitService:ProduitService) { }
  submitted:boolean = false;
  ref:string;nom:string;prix:number;src:string;promo:boolean;
  type:string;
  message ="";
  ajout:boolean;
  

  onSubmit(frm:NgForm)
  {
    this.submitted =true;
    if(this.type=="m")
     this.ajout = this.produitService.addMakeup(this.nom,this.ref,this.src,this.prix,this.promo,this.myDate);
    if(this.ajout)
      this.message="Votre nouveau produit:" +this.nom + " a bien été ajouté";
    else
      this.message="Le produit d'id "+ this.ref +" existe déjà !";
  }
  ngOnInit() {
   
  }

}
