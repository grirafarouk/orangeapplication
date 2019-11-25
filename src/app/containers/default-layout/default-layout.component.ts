import { CookieService } from 'ngx-cookie-service';
import { YourService } from './../../your.service';
import { AppService } from './../../app.service';
import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private appservice: AppService, private router: Router, private cokie: CookieService, private userserive: YourService, @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  public getuser(): any {

    return this.cokie.get('name');
  }
  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  public getrole(): any {

    return this.cokie.get('profil');
  }


  logout() {
    this.cokie.delete('name')
    this.cokie.delete('profil')
    this.appservice.setauthenticated(false)
    this.router.navigate(["/login"]);

  }
}
