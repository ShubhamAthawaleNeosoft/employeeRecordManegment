import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private userData: UserDataService,private router:Router, private routes: ActivatedRoute) {
    
  }
  editEmplyeeForm = new FormGroup({
    name :new FormControl(''),
    empId :new FormControl(''),
    emailId :new FormControl(''),
    mobileNo :new FormControl('')
  })

  editEmp(){
   console.log("hello")
   console.log(this.editEmplyeeForm.value)
    this.userData.editEmployee(this.employees.id,this.editEmplyeeForm.value).subscribe((result)=>{
      console.log(result);
    })
    this.router.navigate(['/dashboard/all_employee']);
  }

  ngOnInit(): void {
    this.userData.employees().subscribe((data)=>{
      this.employees=data;
      var editEmp= this.employees.find((val:any)=>{return(val.id==this.empId)})
      this.employees=editEmp;
      console.log(this.employees)
      if(this.employees){
      this.editEmplyeeForm.controls['name'].setValue(this.employees.name)
      this.editEmplyeeForm.controls['empId'].setValue(this.employees.empId)
      this.editEmplyeeForm.controls['emailId'].setValue(this.employees.emailId)
      this.editEmplyeeForm.controls['mobileNo'].setValue(this.employees.mobileNo)
    }
    });
  }

}
