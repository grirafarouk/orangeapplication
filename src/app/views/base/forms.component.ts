import { CookieService } from 'ngx-cookie-service';
import { Component, ViewChild } from '@angular/core';
import { gift_type } from '../../models/gift_type';
import { gift } from '../../models/gift';
import { GiftTypeService } from '../../gift-type.service';
import { GiftService } from '../../gift.service';
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];
  listgifttype: Array<gift_type> = [];
  utilisateur: gift;
  user: gift = new gift();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c:CookieService ,private giftservice: GiftTypeService,
    private utilisateurService: GiftService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.giftservice.getAll().subscribe(data => {

      this.listgifttype = data

    })
    this.utilisateur = new gift();
    this.utilisateurService.getAll().subscribe(data => {
      this.ListUtilistaeur = data;
    })
  }

  public getuser(): any {
    let user: any
    return this.c.get('profil');
  }

  showDeleteModal(technologie: any): any {
    this.utilisateur = Object.assign({}, technologie);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.utilisateur.id_gift > 0) {
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
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: gift) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "gift ajouté avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

  showEditModal(utilisateur: any) {
    this.utilisateur = Object.assign({}, utilisateur);

    if (this.utilisateur.id_gift > 0) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.utilisateurModal.show();

  }

  updateUtilisateur() {
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: gift) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "gift  modifié avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }


  saveUtilisateur() {
    let error = false;

    if (!error) {
      if (this.utilisateur.id_gift > 0)
        this.updateUtilisateur();
      else this.createUtilisateur();
    }
  }
  delete() {
    this.utilisateurService.delete(this.utilisateur).toPromise().then((data) => {
      this.ngOnInit();
      this.notifierService.notify("success", "gift Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new gift();
  }

}
