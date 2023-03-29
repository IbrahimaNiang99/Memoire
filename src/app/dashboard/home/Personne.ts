import { Time } from "@angular/common";

export class Personne{
    prenom:string|undefined;
    nom:string|undefined;
    adresse:string|undefined;
    lieuNaissance:string|undefined;
    dateNaissance : Date | undefined;
    heureNaissance : Time|undefined;
    degresParental:string|undefined;
    cni:string|undefined;
    sexe:string|undefined;
}