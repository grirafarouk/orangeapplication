import { roleType } from './../../models/roleType';
import { UserService } from './../../user.service';
import { CookieService } from 'ngx-cookie-service';
import { YourService } from './../../your.service';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { user } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  listeUsers = [];
  diableButton = false;
  credential = {
    name: '',
    pass: ''
  }
  loginform: FormGroup
  constructor(private users: UserService, private notifier: NotifierService, private cookie: CookieService, private router: Router, private fb: FormBuilder, private yourservice: YourService, private appservice: AppService) { }

  ngOnInit() {

    this.loginform = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(3)])]


    })

  }

  login() {
    let verifiedpassuser: boolean = false;
     let profil:string="";
    this.users.getAll().subscribe(data => {
      this.listeUsers = data


      this.listeUsers.forEach(res => {
        if ((res.login == this.credential.name) && (res.password == this.credential.pass)) {
          verifiedpassuser = true;
          profil=res.role.libelle
        }

      })

      if (verifiedpassuser == true) {
        this.cookie.set('name', this.credential.name)
        this.cookie.set('profil',profil)
        console.log(this.cookie.get("profil"))

        this.yourservice.setBehaviorView({ user: this.credential });
        this.appservice.authenticate(this.cookie.get('name'), () => {
          this.router.navigate(["/dashboard"])

        });
      }
      else {
        this.notifier.notify("error", "login ou mot de passe incorrecte ")

      }
    })

  }
}