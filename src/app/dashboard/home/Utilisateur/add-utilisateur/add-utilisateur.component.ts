import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Utilisateur } from './Utilisateur';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {

  newUti = new Utilisateur();
  
  constructor(private _formBuilder:FormBuilder) { }

  formUtilisateur = this._formBuilder.group({
    prenom: ['',Validators.required],
    nom: ['',Validators.required],
    adresse: ['',Validators.required],
    email: ['',Validators.required],
    nomUtilisateur: ['',Validators.required],
    fonction: ['',Validators.required],
    sexe: ['',Validators.required],
    telephone: ['',Validators.required],
  });

  ngOnInit(): void {
  }

  ajout(){

  }

}
