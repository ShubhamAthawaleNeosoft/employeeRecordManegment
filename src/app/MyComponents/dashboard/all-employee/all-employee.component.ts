import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  employees :any;
  empDetails:[] | any;
  uid = localStorage.getItem("uid");

 
  constructor(private userData: UserDataService,private router:Router,private toastr: ToastrService) { 
    userData.employees().subscribe((data)=>{
      this.employees=data;
      this.empDetails= this.employees.filter((val:any)=>val.userId==this.uid);
    });
    // this.getEmp()
  }

  editEmp(id:any){
    this.router.navigate(['/dashboard/edit_employee', id]);
  }
  deleteEmp(id:any){
    this.toastr.error('Deleted Employee Record Successfully',"Message");
    this.userData.deleteEmployee(id).subscribe((err)=>{
        console.log(err);
        this.getEmp();
  })
  
  }
  getEmp(){
    this.userData.employees().subscribe((data)=>{
      this.employees=data;
      this.empDetails= this.employees.filter((val:any)=>val.userId==this.uid);
    })
  }
  ngOnInit(): void {
    
  }

}
