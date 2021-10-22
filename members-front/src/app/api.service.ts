import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token ae1afe3d3de55cab2dd6e5911fd3bee018384650'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token)

  constructor(private http: HttpClient) { }

  getAllMembers() : Observable<any>{
    return this.http.get(this.baseUrl + 'members/',
    {headers: this.httpHeaders});

  }

  getMember(id:any) : Observable<any>{
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});

  }

  saveNewMember(member:any) : Observable<any>{
    return this.http.post(this.baseUrl + 'members/', member,
    {headers: this.httpHeaders});

  }




}
