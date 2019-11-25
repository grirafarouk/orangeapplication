import { CookieService } from 'ngx-cookie-service';
import { GiftService } from './../../gift.service';
import { CampaignService } from './../../campaign.service';
import { Campaign } from './../../models/Campaign';
import { Component, OnInit, ViewChild } from '@angular/core';
import { spin_destination } from '../../models/spin_destination';
import { SpinDestinationService } from '../../spin-destination.service';
import { NotifierService } from 'angular-notifier';
import { gift } from '../../models/gift';

@Component({
  selector: 'app-spin-destination',
  templateUrl: './spin-destination.component.html'})
export class SpinDestinationComponent implements OnInit {

 
  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];
  listgifttype:Array<Campaign>=[];
  gifts:Array<gift>=[];

  utilisateur: spin_destination;
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c:CookieService, private giftsservice:GiftService  ,private giftservice:CampaignService,
    private utilisateurService: SpinDestinationService,
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
    this.giftsservice.getAll().subscribe(data=>{

      this.gifts=data
      
          })
          
    this.utilisateur = new spin_destination();
    this.utilisateurService.getAll().subscribe(data => {
      this.ListUtilistaeur = data;
    })
  }


  showDeleteModal(technologie: any): any {
    this.utilisateur = Object.assign({}, technologie);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.utilisateur.id_spin_dest > 0) {
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
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: spin_destination) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "spin_destination ajouté avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

  showEditModal(utilisateur: any) {
    this.utilisateur = Object.assign({}, utilisateur);
  
    if (this.utilisateur.id_spin_dest > 0) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.utilisateurModal.show();

  }

  updateUtilisateur() {
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: spin_destination) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "spin_destination  modifié avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }


   saveUtilisateur() {
    let error = false;

    if (!error) {
      if (this.utilisateur.id_spin_dest> 0)
        this.updateUtilisateur();
      else this.createUtilisateur();
    }
  }
  delete() {
    this.utilisateurService.delete(this.utilisateur).toPromise().then((data) => {
      this.ngOnInit();
      this.notifierService.notify("success", "spin_destination Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new spin_destination();
  }

}
