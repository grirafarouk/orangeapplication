import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { navItems } from './_nav';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})



export class CampaignService {

  constructor(private httpClient: HttpClient) 
  
  { 

  }


  public findNavItemByUrl(url) {
    var elementFound = {};
    navItems.forEach(element => {
      if (element.url != undefined && element.url == url) {
        elementFound = element;
        console.log(elementFound)
      }
      else if (element.children != undefined) {
        var childs = element.children;
        for (let i = 0; i < childs.length; i++) {
          if (childs[i].url != undefined && url == childs[i].url) {
            elementFound = childs[i];
          }
        }
        
      }
    });
    return elementFound;
  }

 public hasAccessByUrl(url: string, role: any): boolean {
    var item = this.findNavItemByUrl(url);
    return this.hasAccess(item, role)
  }
  public hasAccess(item, role) {
    if (item.profils == undefined)
     return true;
    else {
      if (item.profils.indexOf(role) == -1)
       return false;
      else return true;
      }
    }
   httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  
  public getAll(): Observable<any> {
  return this.httpClient.get("http://localhost:8080/api/campaign/listecompaign");
  }


  public save(utilisateur): Observable<any> {
      return this.httpClient.post("http://localhost:8080/api/campaign/save", utilisateur, httpOptions);
  }

  public update(utilisateur): Observable<any> {
      return this.httpClient.post("http://localhost:8080/api/campaign/update", utilisateur, httpOptions);
  }



  delete(competence): Observable<any> {

    return this.httpClient.delete("http://localhost:8080/api/campaign/"+competence.id_campaign );
  }

  find(id): Observable<any> {

    return this.httpClient.get("http://localhost:8080/api/find/campaign/"+id );
  }
}
