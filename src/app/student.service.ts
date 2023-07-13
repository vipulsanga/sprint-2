import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/student";
  constructor(private httpClient:HttpClient) { }

  getStudentlist(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`)
  }

  createStudent(student:Student): Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl}`,student);
  }

  getStudentByid(id: number):Observable<Student>{
      return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  updateStudent(id:number,student:Student):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,student);
  }

  deleteStudent(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
