import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) 
  
  { 

  }
   httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  baseurl=environment.baseUrl;
  public getAll(): Observable<any> {
  return this.httpClient.get(this.baseurl+"/user/listeuser");
  }


  public save(utilisateur): Observable<any> {
      return this.httpClient.post(this.baseurl+"/user/save", utilisateur, httpOptions);
  }

  public update(utilisateur): Observable<any> {
      return this.httpClient.post(this.baseurl+"/user/update", utilisateur, httpOptions);
  }



  delete(user): Observable<any> {

    return this.httpClient.delete(this.baseurl+"/user/"+user.id );
  }

}
