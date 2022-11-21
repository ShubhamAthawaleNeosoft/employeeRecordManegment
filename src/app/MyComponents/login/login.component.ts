import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [
  //   trigger('flyInOut', [
  //   transition(':enter', [
  //   style({transform: 'translateY(-100%)'}),
  //   animate('200ms ease-in', style({transform: 'translateY(0%)'}))
  //   ]),
  //   transition(':leave', [
  //   animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
  //   ])
  //   ])
  //   ]
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
      // alert("sucess");
      this.toastr.success('Login Successfully',"Message")
      localStorage.setItem("uid", found.id); 
      this.router.navigate(['/dashboard/all_employee']);
    }
    else if(!found){
      this.toastr.error('Id / Password must be wrong',"Message")
      // alert("somthing wents wrong");
    }
  }
  signUp(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    
  }

}
function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

function style(arg0: { transform: string; }): any {
  throw new Error('Function not implemented.');
}

function animate(arg0: string, arg1: any): any {
  throw new Error('Function not implemented.');
}

function transition(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

