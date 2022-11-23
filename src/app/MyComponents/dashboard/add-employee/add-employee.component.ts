import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  uid = localStorage.getItem("uid");

  constructor(private userData: UserDataService,private router:Router,private toastr: ToastrService) { 
    
  }

  addEmplyeeForm = new FormGroup({
    name :new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$')]),
    empId :new FormControl('',[Validators.required]),
    emailId :new FormControl('',[Validators.required,Validators.email]),
    mobileNo :new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    userId : new FormControl('<string | null>'),
  })

  addEmp(){
    
    this.addEmplyeeForm.value.userId=this.uid;
    this.userData.addEmployee(this.addEmplyeeForm.value).subscribe((result)=>{
      console.log(result);
    })
    this.toastr.success('Employee Added Successfully',"Message");
    this.router.navigate(['/dashboard/all_employee']);
  }
 
  get empName(){return this.addEmplyeeForm.get('name')}
  get empEmailid(){return this.addEmplyeeForm.get('emailId')}
  get empMobileNo(){return this.addEmplyeeForm.get('mobileNo')}
  get employeeId(){return this.addEmplyeeForm.get('empId')}

  ngOnInit(): void {
  }

}
