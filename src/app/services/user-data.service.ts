import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public nontificationSubject = new BehaviorSubject("");
  url = "https://crudcrud.com/api/8382b55626f1464ba60fb3802ed6691c/users/"  
  employee_url = 'https://crudcrud.com/api/8382b55626f1464ba60fb3802ed6691c/employee/';
  dummy_api = 'https://crudcrud.com/api/71ddb43e938c4f38834abc52eef054e0/users';

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
