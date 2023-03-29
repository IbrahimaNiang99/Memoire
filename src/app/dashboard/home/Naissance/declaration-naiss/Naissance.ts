import { Declarant } from "../../Declarant";
import { Departement } from "../../Departement";
import { Jugement } from "../../jugement";
import { Personne } from "../../Personne";
import { Registre } from "../../Registre";
import { Structuresanitaire } from "../../Structuresanitaire";

export class Naissance{
    numeroActe : number|undefined;
    registre : Registre = new Registre();
    dateDeclaration: Date | undefined;
    pere : Personne = new Personne();
    mere : Personne = new Personne();
    declare : Personne = new Personne();
    structureSanitaire : Structuresanitaire = new Structuresanitaire();    
    //jugement : Jugement = new Jugement();
    declarant : Declarant = new Declarant();
    typeDeclarant:string|undefined;
    typeDeclaration:string|undefined;

    numJugement=null;
    lieuJugement=null;
    dateJugement=null;

}