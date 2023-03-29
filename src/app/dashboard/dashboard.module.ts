import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './home/accueil/accueil.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListeNaissComponent } from './home/Naissance/liste-naiss/liste-naiss.component';
import { DeclarationNaissComponent } from './home/Naissance/declaration-naiss/declaration-naiss.component';
import { AddUtilisateurComponent } from './home/Utilisateur/add-utilisateur/add-utilisateur.component';
import { ListeUtilisateurComponent } from './home/Utilisateur/liste-utilisateur/liste-utilisateur.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { DeclarationDecesComponent } from './home/Deces/declaration-deces/declaration-deces.component';
import { ListeDecesComponent } from './home/Deces/liste-deces/liste-deces.component';
import { DetailsNaissanceComponent } from './home/Naissance/details-naiss/details-naissance.component';
import { StructureSanitaireComponent } from './home/Pages/structure-sanitaire/structure-sanitaire.component';
import { ResidenceComponent } from './home/Pages/residence/residence.component';
import { ListeMariageComponent } from './home/Mariage/liste-mariage/liste-mariage.component';
import { DeclarationMariageComponent } from './home/Mariage/declaration-mariage/declaration-mariage.component';

const routes: Routes = [
  {path: "home", component: HomeComponent,
    children: [
      { path: "", component: AccueilComponent },
      { path: "accueil", component: AccueilComponent },
      { path: "utilisateur/liste", component: ListeUtilisateurComponent },
      { path: "utilisateur/add", component: AddUtilisateurComponent },

      /**
       * Routes concernant la Naissance 
       * */
      { path: "naissance/liste", component: ListeNaissComponent },
      { path: "naissance/declaration", component: DeclarationNaissComponent },
      { path: "naissance/details/:id", component: DetailsNaissanceComponent},

      /**
       * Routes concernant les mariages 
       * */
      { path: "mariage/declaration", component: DeclarationMariageComponent},
      { path: "mariage/liste", component: ListeMariageComponent},

      /**
       * Routes concernant le décès
       */
      { path: "deces/declaration", component: DeclarationDecesComponent},
      { path: "deces/liste", component: ListeDecesComponent},


      /**
       * Strure sanitaire 
       */

      { path: "structuresanitaire", component: StructureSanitaireComponent},


      /**
       * Certificat de résidence
       */

      { path: "residence", component: ResidenceComponent}
    
    ]}
];

@NgModule({
  declarations: [
    HomeComponent,
    AccueilComponent,
    ListeNaissComponent,
    DeclarationNaissComponent,
    AddUtilisateurComponent,
    ListeUtilisateurComponent,
    DeclarationDecesComponent,
    ListeDecesComponent,
    DetailsNaissanceComponent,
    StructureSanitaireComponent,
    ResidenceComponent,
    ListeMariageComponent,
    DeclarationMariageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
  ]
})
export class DashboardModule { }
