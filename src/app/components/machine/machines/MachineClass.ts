export class MachineClass {
   public  id : number ; 
 public   num : String ; 
  public  nom : String ; 
    public  utilisateur : String ; 
    public  site : String ; 
    public  fournisseur : String ; 
    public  garantie : String ; 
    public  nom_reseau : String ; 
    public  etat : String ; 
    public  date_achat : String ; 

    constructor(id : number ,
        num : String ,
        nom : String ,
        utilisateur : String ,
        site : String ,
        fournisseur : String ,
        garantie : String ,
        nom_reseau : String ,
        etat : String ,
        date_achat : String  ){ this.id = id , this.nom = nom , this.num = num , this.utilisateur = utilisateur , this.site = site , this.fournisseur = fournisseur ,this.etat ="true" , this.garantie = garantie , this.date_achat = date_achat , this.nom_reseau = nom_reseau}
   
      public test()
      {
        alert('ff15')
      }


}