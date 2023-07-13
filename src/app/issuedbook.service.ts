import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssuedBook } from './issued-book';

@Injectable({
  providedIn: 'root'
})
export class IssuedbookService {
  private baseUrl="http://localhost:8080/issuedbooks";
  
  constructor(private Httpclient:HttpClient) { }

  getIssuedBookList(): Observable<IssuedBook[]> {
    return this.Httpclient.get<IssuedBook[]>(`${this.baseUrl}`)
  }
}
