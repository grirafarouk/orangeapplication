import { CookieService } from 'ngx-cookie-service';
import { SpingDestinationFailedService } from './../../sping-destination-failed.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Sping_destination_failed } from '../../models/Sping_destination_failed';
import { Campaign } from '../../models/Campaign';
import { NotifierService } from 'angular-notifier';
import { CampaignService } from '../../campaign.service';

@Component({
  selector: 'app-spin-destination-failed',
  templateUrl: './spin-destination-failed.component.html'})
export class SpinDestinationFailedComponent implements OnInit {

  
  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];
  listgifttype:Array<Campaign>=[];

  utilisateur: Sping_destination_failed;
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c:CookieService, private giftservice:CampaignService,
    private utilisateurService: SpingDestinationFailedService,
    private notifierService: NotifierService,
  ) { }
  public getuser():any{
    let user:any
return this.c.get('profil');
  }
 
  ngOnInit(): void {
    this.giftservice.getAll().subscribe(data=>{

this.listgifttype=data

    })
          
    this.utilisateur = new Sping_destination_failed();
    this.utilisateurService.getAll().subscribe(data => {
      this.ListUtilistaeur = data;
    })
  }


  showDeleteModal(technologie: any): any {
    this.utilisateur = Object.assign({}, technologie);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.utilisateur.id > 0) {
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
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: Sping_destination_failed) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "Sping_destination_failed ajouté avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

  showEditModal(utilisateur: any) {
    this.utilisateur = Object.assign({}, utilisateur);
  
    if (this.utilisateur.id > 0) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.utilisateurModal.show();

  }

  updateUtilisateur() {
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: Sping_destination_failed) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "Sping_destination_failed  modifié avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }


   saveUtilisateur() {
    let error = false;

    if (!error) {
      if (this.utilisateur.id> 0)
        this.updateUtilisateur();
      else this.createUtilisateur();
    }
  }
  delete() {
    this.utilisateurService.delete(this.utilisateur).toPromise().then((data) => {
      this.ngOnInit();
      this.notifierService.notify("success", "Sping_destination_failed Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new Sping_destination_failed();
  }

}
