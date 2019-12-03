export class Produits
{  
     private _nom:string;
     private _ref:string;
      private _src:string;
    private _prix:number;
    private _promo:boolean; 
    private _date:string;
    
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get ref(): string {
        return this._ref;
    }
    public set ref(value: string) {
        this._ref = value;
    }

    public get src(): string {
        return this._src;
    }
    public set src(value: string) {
        this._src = value;
    }
    

    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }


    public get promo(): boolean {
        return this._promo;
    }
    public set promo(value: boolean) {
        this._promo = value;
    }


    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    constructor(nom:string,ref:string,src:string,prix:number,promo:boolean,d:string){
        this._nom=nom;
        this._ref=ref;
        this._src=src;
        this._prix=prix;
        this._promo=promo;
        this._date=d;
    }
}