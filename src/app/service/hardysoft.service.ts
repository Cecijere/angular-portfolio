import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardysoft } from '../model/hardysoft';

@Injectable({
  providedIn: 'root'
})
export class HardysoftService {
  expURL = 'http://localhost:8080/hardysoft/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hardysoft[]>{
    return this.httpClient.get<Hardysoft[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Hardysoft>{
    return this.httpClient.get<Hardysoft>(this.expURL + `detail/${id}`);
  }

  public save(hardysoft: Hardysoft): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', hardysoft);
  }

  public update(id: number, hardysoft: Hardysoft): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, hardysoft);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.expURL + `delete/${id}`);
  }
}
