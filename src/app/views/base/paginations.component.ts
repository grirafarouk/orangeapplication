import { ClientstatutService } from './../../clientstatut.service';
import { Component, Input, ViewEncapsulation, ViewChild  } from '@angular/core';
import { client_current_statuts } from '../../models/client_current_statuts';
import { NotifierService } from 'angular-notifier';
import { gift_type } from '../../models/gift_type';
import { GiftTypeService } from '../../gift-type.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  templateUrl: 'paginations.component.html',
  styles: ['.pager li.btn:active { box-shadow: none; }'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationsComponent {

  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];
  listgifttype:Array<gift_type>=[];
  utilisateur: client_current_statuts;
  user: client_current_statuts = new client_current_statuts();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c:CookieService,
    private giftservice:GiftTypeService,
    private utilisateurService: ClientstatutService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.giftservice.getAll().subscribe(data=>{

this.listgifttype=data

    })
    this.utilisateur = new client_current_statuts();
    this.utilisateurService.getAll().subscribe(data => {
      this.ListUtilistaeur = data;
    })
  }

  public getuser():any{
    let user:any
return this.c.get('profil');
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
    console.log
    console.log(this.utilisateur)
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: client_current_statuts) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "client_current_statuts ajouté avec succés !")
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
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: client_current_statuts) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "client_current_statuts  modifié avec succés !")
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
      this.notifierService.notify("success", "client_current_statuts Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new client_current_statuts();
  }

}
