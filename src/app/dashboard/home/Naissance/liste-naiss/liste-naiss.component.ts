import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NaissanceServiceService } from 'src/app/services/naissanceService/naissance-service.service';

@Component({
  selector: 'app-liste-naiss',
  templateUrl: './liste-naiss.component.html',
  styleUrls: ['./liste-naiss.component.css']
})
export class ListeNaissComponent implements OnInit {
  /**
   * Pour stocker la liste des actes de naisance
   */
  listeActe:any;

  constructor(private naissanceService:NaissanceServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.liste();
  }

  liste(){
    return this.naissanceService.listeNaissance().subscribe(res=>{
      this.listeActe = res
      console.log(this.listeActe)
    })
  }

  details(id:number){
    return this.router.navigate(['/home/naissance/details/',id]);
  }

}
