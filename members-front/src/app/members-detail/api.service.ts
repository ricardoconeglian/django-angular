import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://35.247.197.251:8000/';
  token = 'Token 5919d41bb05004a1ef3b808d5d24ded501d31ec0'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token)

  getMember(id:any) : Observable<any>{
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});

  }

  updateMember(member:any) : Observable<any>{
    let body = {name: member.name, surname: member.surname, phone: member.phone};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
    {headers: this.httpHeaders});

  }

  deleteMember(id:any) : Observable<any>{
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  }
}

