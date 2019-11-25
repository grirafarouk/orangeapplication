import { CampaignService } from './campaign.service';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    console.log("the state is")
    console.log(state)
    console.log("the route is")
    console.log(route)
  let  role=this.cookie.get("profil")
return this.campaing.hasAccessByUrl(state.url, role);
}

  constructor(private campaing:CampaignService,private cookie:CookieService) { }
}
