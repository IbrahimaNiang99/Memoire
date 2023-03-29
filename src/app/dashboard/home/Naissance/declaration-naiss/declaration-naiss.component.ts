import { DatePipe } from '@angular/common';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NaissanceServiceService } from 'src/app/services/naissanceService/naissance-service.service';
import { Jugement } from '../../jugement';
import { Naissance } from './Naissance';

@Component({
  selector: 'app-declaration-naiss',
  templateUrl: './declaration-naiss.component.html',
  styleUrls: ['./declaration-naiss.component.css']
})
export class DeclarationNaissComponent implements OnInit {

  myDate : any;
  typeDeclarant = false;
  dateDuJour = new Date();
  listeRegistre : any;

  constructor(private _formBuilder:FormBuilder,
              private datePipe:DatePipe, 
              private naissService:NaissanceServiceService,
              private router:Router ) { 
    //this.dateDuJour = this.datePipe.transform(this.dateDuJour,"dd/MM/yyyy");
  }

  newDeclaration = new Naissance();
  typeDeclaration = false;
  

  structureSanitaire = this._formBuilder.group({
    code: ['', Validators.required],
    nomStructure: ['', Validators.required],
    departement: ['', Validators.required],
  });

  enfant = this._formBuilder.group({
    prenomEnfant: ['', Validators.required],
    nomEnfant: ['', Validators.required],
    dateNaissEnfant: ['', Validators.required],
    heureNaissEnfant: ['', Validators.required],
    lieuNaissEnfant: ['', Validators.required],
    sexeEnfant: ['', Validators.required],
    dateDeclaration: ['', Validators.required],
    typeDecla : ['', Validators.required],
    numeroJgmnt: ['', Validators.required],
    lieuJgmnt:['', Validators.required],
    dateJgmnt:['', Validators.required],
    numeroActe: ['', Validators.required],
    id: ['', Validators.required],
  });

  pere = this._formBuilder.group({
    prenomPere: ['', Validators.required],
    nomPere: ['', Validators.required],
    dateNaissPere: ['', Validators.required],
    adressePere: ['', Validators.required],
    cniPere: ['', Validators.required],
  });

  mere = this._formBuilder.group({
    prenomMere: ['', Validators.required],
    nomMere: ['', Validators.required],
    dateNaissMere: ['', Validators.required],
    adresseMere: ['', Validators.required],
    cniMere: ['', Validators.required],
  });

  declarant = this._formBuilder.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    cni: ['', Validators.required],
    adresse: ['', Validators.required],
    degresParental: ['', Validators.required],
    typeDeclarant: ['', Validators.required],
  });




  // test = this._formBuilder.group({
  //   prenomMere: ['', Validators.required],
  //   nomMere: ['', Validators.required],
  //   dateNaissMere: ['', Validators.required],
  //   adresseMere: ['', Validators.required],
  //   cniMere: ['', Validators.required],

  //   prenomPere: ['', Validators.required],
  //   nomPere: ['', Validators.required],
  //   dateNaissPere: ['', Validators.required],
  //   adressePere: ['', Validators.required],
  //   cniPere: ['', Validators.required],

  //   prenomEnfant: ['', Validators.required],
  //   nomEnfant: ['', Validators.required],
  //   dateNaissEnfant: ['', Validators.required],
  //   heureNaissEnfant: ['', Validators.required],
  //   lieuNaissEnfant: ['', Validators.required],
  //   sexeEnfant: ['', Validators.required],

  //   code: ['', Validators.required],
  //   nomStructure: ['', Validators.required],
  //   departement: ['', Validators.required],
  // });

  isLinear = true;

  ngOnInit(): void {
    this.newDeclaration.dateDeclaration = this.dateDuJour
    this.registre();

  }

  registre(){
    return this.naissService.listeRegistre().subscribe(res=>{
      this.listeRegistre = res
      console.log(this.listeRegistre)
    })
  }

  ajoutNaissance(){ 
    if (this.newDeclaration.typeDeclaration == "Jugement") {

      // this.newDeclaration.jugement == null;
      // this.newDeclaration.jugement.id === null;
      // this.newDeclaration.jugement.dateJugement === null;
      // this.newDeclaration.jugement.lieuJugement === null;
      // this.newDeclaration.jugement.numJugement === null;

      if (this.newDeclaration.typeDeclarant=="mere") {
        this.newDeclaration.declarant = this.newDeclaration.mere;
        this.newDeclaration.declarant.degresParental = "mere";
        console.log(this.newDeclaration.declarant)
        console.log(this.newDeclaration);
        
          
      } else if(this.newDeclaration.typeDeclarant=="pere"){
      this.newDeclaration.declarant = this.newDeclaration.pere;
        this.newDeclaration.declarant.degresParental = "pere";
        console.log(this.newDeclaration.declarant);
        console.log(this.newDeclaration);
        this.naissService.newDeclaration(this.newDeclaration);
        
      } else if(this.newDeclaration.typeDeclarant=="autre"){
        console.log(this.newDeclaration.declarant);
        console.log(this.newDeclaration);
        //return this.add();
        
      }
    }
  }

    // add(naiss:Naissance){
    //   return this.naissService.newDeclaration(naiss).subscribe(
    //     res=>{
    //       location.reload();
    //     })
        
    // }
  normale(){
    this.typeDeclaration = false;
  }
  tardive(){
    this.typeDeclaration = false;
  }
  jugement(){
    this.typeDeclaration = true;
  }

  declarantIsAutre(){
    this.typeDeclarant = true;
  }

  declarantIsPere(){
    this.typeDeclarant = false;
  }

  declarantIsMere(){
    this.typeDeclarant = false;
  }


}
