import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {
 employees : any;
 empId = this.routes.snapshot.params['id']
//  empDetail : any;
  constructor(private userData: UserDataService,private router:Router, private routes: ActivatedRoute,private toastr: ToastrService) {
    
  }
  editEmplyeeForm = new FormGroup({
    name :new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$')]),
    empId :new FormControl('',[Validators.required]),
    emailId :new FormControl('',[Validators.required,Validators.email]),
    mobileNo :new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    userId :new FormControl(''),

  })

  editEmp(){
   console.log(this.editEmplyeeForm.value)
    this.userData.editEmployee(this.employees._id,this.editEmplyeeForm.value).subscribe((result)=>{
      console.log(result);
    })
    this.toastr.success('Edit Empolyee Record Successfully',"Message");
    this.router.navigate(['/dashboard/all_employee']);
  }
  
  get empName(){return this.editEmplyeeForm.get('name')}
  get empEmailid(){return this.editEmplyeeForm.get('emailId')}
  get empMobileNo(){return this.editEmplyeeForm.get('mobileNo')}
  get employeeId(){return this.editEmplyeeForm.get('empId')}

  ngOnInit(): void {
    this.userData.employees().subscribe((data)=>{
      this.employees=data;
      var editEmp= this.employees.find((val:any)=>{return(val._id==this.empId)})
      this.employees=editEmp;
      if(this.employees){
      this.editEmplyeeForm.controls['name'].setValue(this.employees.name)
      this.editEmplyeeForm.controls['empId'].setValue(this.employees.empId)
      this.editEmplyeeForm.controls['emailId'].setValue(this.employees.emailId)
      this.editEmplyeeForm.controls['mobileNo'].setValue(this.employees.mobileNo)
      this.editEmplyeeForm.controls['userId'].setValue(this.employees.userId)
    }
    });
  }

}
