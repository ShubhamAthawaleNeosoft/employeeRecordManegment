import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users :any;
  loginData =[];
  isValid=false;

  loginForm = new FormGroup({
    emailId :new FormControl(''),
    password :new FormControl(''),
  })

  constructor(private userData: UserDataService,private router:Router,private toastr: ToastrService) { 
    userData.users().subscribe((data)=>{
      this.users=data;
    });

  }
  loginUser(){
    const found = this.users.find((element:any)=>{
      return( element.emailId==this.loginForm.value.emailId &&
        element.password==this.loginForm.value.password
        )
    })
    if(found){
      this.toastr.success('Login Successfully',"Message")
      localStorage.setItem("uid", found._id); 
      this.router.navigate(['/dashboard/all_employee']);
    }
    else if(!found){
      this.toastr.error('Id / Password must be wrong',"Message")
    }
  }
  signUp(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    
  }

}

