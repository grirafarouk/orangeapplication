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
export class GiftTypeService {

  constructor(private httpClient: HttpClient) 
  
  { 

  }
   httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  
  public getAll(): Observable<any> {
  return this.httpClient.get("http://localhost:8080/api/gifttype/listegifttype");
  }


  public save(utilisateur): Observable<any> {
      return this.httpClient.post("http://localhost:8080/api/gifttype/save", utilisateur, httpOptions);
  }

  public update(utilisateur): Observable<any> {
      return this.httpClient.post("http://localhost:8080/api/gifttype/update", utilisateur, httpOptions);
  }



  delete(competence): Observable<any> {

    return this.httpClient.delete("http://localhost:8080/api/gifttype/"+competence.id );
  }

}
