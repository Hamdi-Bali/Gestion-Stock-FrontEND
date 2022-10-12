export class SpareInfo{
      modele !: String ; 
     qte !: number ; 



  constructor (modele:String,qte:number){this.modele = modele ;
    this.qte = qte} 

        public getModele():String{
            return this.modele ; 
        }
        public getQte():number{
            return this.qte ; 
        }
        public SetModele(modele : String ):void{
            this.modele = modele ; 
        }
        public SetQte(qte:number):void
        {
            this.qte = qte ; 
        }



}