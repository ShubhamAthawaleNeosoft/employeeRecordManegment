import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css']
})
export class GetEmployeesComponent {
  employees : any;
  empDetails: any;

 
  constructor(private userData: UserDataService,private router:Router,private http: HttpClient) { 
    userData.get_employees().subscribe((val)=>{
      this.empDetails = val;
      this.employees = this.empDetails.data;
      // console.log(val)
    });
  }

  addEmplyeeForm = new FormGroup({
    name :new FormControl(''),
    salary :new FormControl(''),
    age :new FormControl(''),

  })

  getEmp(){

  }
  addEmp(){
    this.userData.post_employee(this.addEmplyeeForm.value).subscribe((result)=>{
      console.log(result);
    })
  }
  // callAPI() {
  //   let url = 'https://crudcrud.com/api/236204851d2742b18a3d8a988ef952a6/users'
  //   let body = { "name":"Sparkle Angel", "age":2, "colour":"blue" }

  //   this.http.post<any>(url , { body }).subscribe(data => {
  //     console.log('data', data)
  // })
  // }


  delEmp(id:number){
   var filterdData=this.employees.filter((val:any)=>{
    return( id!=val.id )
  })
  this.employees=filterdData
  }


 
}
