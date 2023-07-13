import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:8080/book";
  constructor(private httpclient:HttpClient) { }

  getBooklist(): Observable<Books[]>{
    return this.httpclient.get<Books[]>(`${this.baseUrl}`)
  }

  createBook(books:Books): Observable<Object>
  {
    return this.httpclient.post(`${this.baseUrl}`,books);
  }

  getBookByid(id: number):Observable<Books>{
    return this.httpclient.get<Books>(`${this.baseUrl}/${id}`);
}

updateBook(id:number,book:Books):Observable<Object>{
  return this.httpclient.put(`${this.baseUrl}/${id}`,book);
}

deleteBook(id: number):Observable<Object>{
  return this.httpclient.delete(`${this.baseUrl}/${id}`);
}
}
