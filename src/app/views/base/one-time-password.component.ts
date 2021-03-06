import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { one_time_password } from '../../models/one_time_password';
import { OneTimePasswordService } from '../../one-time-password.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-one-time-password',
  templateUrl: './one-time-password.component.html'})
export class OneTimePasswordComponent implements OnInit {

  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];

  utilisateur: one_time_password;
  user: one_time_password = new one_time_password();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private c:CookieService,
    private utilisateurService: OneTimePasswordService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.utilisateur = new one_time_password();
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
    if (this.utilisateur.id> 0) {
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
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: one_time_password) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "one_time_password ajouté avec succés !")
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
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: one_time_password) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "one_time_password  modifié avec succés !")
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
      this.notifierService.notify("success", "one_time_password Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new one_time_password();
  }

}