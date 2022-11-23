import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    emailId :new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  constructor(private userData: UserDataService,private router:Router,private toastr: ToastrService) { 
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
    this.userData.users().subscribe((data)=>{
      this.users=data;
    });
  }
  get userEmailid(){return this.loginForm.get('emailId')}
  get userPassword(){return this.loginForm.get('password')}
}

