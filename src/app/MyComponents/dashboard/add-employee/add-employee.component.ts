import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  uid = localStorage.getItem("uid");

  constructor(private userData: UserDataService,private router:Router) { 
    
  }

  addEmplyeeForm = new FormGroup({
    name :new FormControl(''),
    empId :new FormControl(''),
    emailId :new FormControl(''),
    mobileNo :new FormControl(''),
    userId : new FormControl('<string | null>'),
  })

  addEmp(){
    
    this.addEmplyeeForm.value.userId=this.uid;
    this.userData.addEmployee(this.addEmplyeeForm.value).subscribe((result)=>{
      console.log(result);
    })
    this.router.navigate(['/dashboard/all_employee']);
  }
 
  ngOnInit(): void {
  }

}
