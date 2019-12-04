import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  submitted:boolean = false;
  productForm:FormGroup;
 maq :any;
  dre :any;
  onSubmit()
  {
    this.submitted =true;}
  constructor(private produitService:ProduitService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.dre = this.produitService.dress;
    this.maq = this.produitService.makeup;
    this.productForm = this.formBuilder.group(
      {
      type:['', Validators.required],
      nom:['', [Validators.required, Validators.minLength(5)]],
      prix:['', Validators.required],
      promo:['', Validators.required]
    }
      )
  }

  public get nom()
  { return this.productForm.controls.nom; }

  public get prix()
  { return this.productForm.controls.prix; }

  public get promo()
  { return this.productForm.controls.promo; }
  public get type()
  { return this.productForm.controls.type; }
  
recherche(){
  if(this.type.value==1){
  this.dre=null;
  this.maq = this.produitService.makeup;}
  if(this.type.value==2) {
  this.maq=null;
  this.dre = this.produitService.dress;}
}
}
