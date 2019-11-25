import { CookieService } from 'ngx-cookie-service';
import { failure } from './../../models/failure';
import { FailureService } from './../../failure.service';
import { Component, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent {
  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];

  utilisateur: failure;
  user:failure = new failure;
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c:CookieService,
    private utilisateurService: FailureService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.utilisateur = new failure;
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
    console.log(this.utilisateur)
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: failure) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "failure ajouté avec succés !")
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
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: failure) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "failure  modifié avec succés !")
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
      this.notifierService.notify("success", "failure Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new failure();
  }

}
