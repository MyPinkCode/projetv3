export class Produits
{   
    
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


    public get dispo(): boolean {
        return this._dispo;
    }
    public set dispo(value: boolean) {
        this._dispo = value;
    }


    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    constructor(private _nom:string, private _ref:string, private _src:string, private _prix:number,
                private _dispo:boolean, private _date:string){}
}