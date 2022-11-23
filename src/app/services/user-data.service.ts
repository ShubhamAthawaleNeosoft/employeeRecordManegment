import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public nontificationSubject = new BehaviorSubject("");
  url = "https://crudcrud.com/api/826576d11cde4e9a8a835a36c9d307f4/users"
  employee_url = 'https://crudcrud.com/api/826576d11cde4e9a8a835a36c9d307f4/employee/';
  dummy_api = 'https://crudcrud.com/api/71ddb43e938c4f38834abc52eef054e0/users';

  constructor(private http:HttpClient) {}

  users(){
    return this.http.get(this.url)
  }
  addUsers(data:any){
    const headers = { "Content-Type": "application/json; charset=utf-8"};
    return this.http.post(this.url,data ,{headers});
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
    return this.http.put(`${this.employee_url}${data}`,article)
  }

  
get_employees(){
  return this.http.get(this.dummy_api)
}
post_employee(data:any){
  return this.http.patch(this.dummy_api,data)
}
sendNotification(data:any){
  this.nontificationSubject.next(data);
}
}
