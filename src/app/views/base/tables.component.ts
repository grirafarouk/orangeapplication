import { CookieService } from 'ngx-cookie-service';
import { Component, ViewChild } from '@angular/core';
import { gift_type } from '../../models/gift_type';
import { GiftTypeService } from '../../gift-type.service';
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];

  utilisateur: gift_type;
  user:gift_type = new gift_type();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c:CookieService,
    private utilisateurService: GiftTypeService,
    private notifierService: NotifierService,
  ) { }
  public getuser():any{
    let user:any
return this.c.get('profil');
  }
 
  ngOnInit(): void {
    this.utilisateur = new gift_type;
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
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: gift_type) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "gift_type ajouté avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

  showEditModal(utilisateur: any) {
    this.utilisateur = Object.assign({}, utilisateur);
  
    if (this.utilisateur.id> 0) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.utilisateurModal.show();

  }

  updateUtilisateur() {
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: gift_type) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "gift_type  modifié avec succés !")
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
      this.notifierService.notify("success", "gift_type Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new gift_type();
  }

}
