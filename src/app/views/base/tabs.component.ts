import { CookieService } from 'ngx-cookie-service';
import { UserService } from './../../user.service';
import { Component, ViewChild } from '@angular/core';
import { user } from '../../models/user';
import { NotifierService } from 'angular-notifier';
import { RoletypeService } from '../../roletype.service';

@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];
  listeroletype:any[];
  utilisateur: user;
  user:user = new user();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c : CookieService,
    private listeroles:RoletypeService,
    private utilisateurService: UserService,
    private notifierService: NotifierService,
  ) { }
  public getuser():any{
    let user:any
return this.c.get('profil');
  }
 
  ngOnInit(): void {
    this.utilisateur = new user();
    this.utilisateurService.getAll().subscribe(data => {
      this.ListUtilistaeur = data;
    })


    this.listeroles.getAll().subscribe(data=>{

    this.listeroletype=data


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
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: user) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "user ajouté avec succés !")
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
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: user) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "user  modifié avec succés !")
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
      this.notifierService.notify("success", "user Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new user();
  }

}
