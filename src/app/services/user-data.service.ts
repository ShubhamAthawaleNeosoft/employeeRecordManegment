import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = 'http://localhost:3000/users'
  employee_url = 'http://localhost:3000/employee/';

  constructor(private http:HttpClient) {}

  users(){
    return this.http.get(this.url)
  }
  addUsers(data:any){
    return this.http.post(this.url,data)
  }
  employees(){
    return this.http.get(this.employee_url)
  }
  addEmployee(data:any){
    return this.http.post(this.employee_url,data)
  }
  deleteEmployee(data:any){
    return this.http.delete(`${this.employee_url}${data}`)
  }
  editEmployee(data:any,article:any){
    return this.http.patch(`${this.employee_url}${data}`,article)
  }
}
