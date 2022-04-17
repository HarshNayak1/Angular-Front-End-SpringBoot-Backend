import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8080/api/v1/employees";  

  constructor(private httpClient:HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{

   return this.httpClient.get<Employee[]>(`${this.baseURL}`);

  }

 createEmployee(employee:Employee):Observable<Object>{

  return this.httpClient.post(`${this.baseURL}`,employee);

 }


 getEployeeById(id:number):Observable<Employee>{


  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
 }


 updatedEmployee(id:number,employee:Employee): Observable<object>{

 return this.httpClient.put(`${this.baseURL}/${id}`,employee);

 }

 deleteEmployee(id:number):Observable<Object>{

  return this.httpClient.delete(`${this.baseURL}/${id}`);

 }

}
