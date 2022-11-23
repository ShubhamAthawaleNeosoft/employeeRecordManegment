import {Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {UserDataService} from '../../services/user-data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userData: UserDataService,private router:Router,private toastr: ToastrService) { 
   
  }

  registerForm = new FormGroup({
    name :new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$')]),
    emailId :new FormControl('',[Validators.required,Validators.email]),
    mobileNo :new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    password :new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  registerUser(){
    this.userData.addUsers(this.registerForm.value).subscribe((result)=>{
      console.log(result);
    })
    this.toastr.success('Register Successfully',"Message");
    this.router.navigate(['/login']);
  }

  logIn(){
    this.router.navigate(['/login']);
  }

  get userName(){return this.registerForm.get('name')}
  get userEmailid(){return this.registerForm.get('emailId')}
  get userMobileno(){return this.registerForm.get('mobileNo')}
  get userPassword(){return this.registerForm.get('password')}

  ngOnInit(): void {
    
  }


}
