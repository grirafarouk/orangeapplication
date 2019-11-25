import { CampaignService } from './../../campaign.service';
import { Campaign } from './../../models/Campaign';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'cards.component.html',
})
export class CardsComponent implements OnInit {

  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];

  utilisateur: Campaign;
  user: Campaign = new Campaign();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private router:Router,  private cokie:CookieService,private location:Location,

    private utilisateurService: CampaignService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.utilisateur = new Campaign();
    this.utilisateurService.getAll().subscribe(data => {
      this.ListUtilistaeur = data;
    })
  }


  showDeleteModal(technologie: any): any {
    this.utilisateur = Object.assign({}, technologie);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.utilisateur.id_campaign> 0) {
      this.verif = false;

    }
    else {

      this.verif = true;
    }
    this.reset();
    this.utilisateurModal.show();
  }

  createUtilisateur() {
    console.log(this.utilisateur)
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: Campaign) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "Campaign ajouté avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

  showEditModal(utilisateur: any) {
    this.utilisateur = Object.assign({}, utilisateur);
  
    if (this.utilisateur.id_campaign > 0) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.utilisateurModal.show();

  }
  public getuser():any{
    let user:any
return this.cokie.get('profil');
  }

  updateUtilisateur() {
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: Campaign) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "configuration  modifié avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

public retoure(){

this.location.back();

}
   saveUtilisateur() {
    let error = false;

    if (!error) {
      if (this.utilisateur.id_campaign> 0)
        this.updateUtilisateur();
      else this.createUtilisateur();
    }
  }
  delete() {
    this.utilisateurService.delete(this.utilisateur).toPromise().then((data) => {
      this.ngOnInit();
      this.notifierService.notify("success", "Campaign Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new Campaign();
  }
  public details(id:any){ 
   
this.router.navigate(['/base/detailcompaign',id])


  }
  
}
