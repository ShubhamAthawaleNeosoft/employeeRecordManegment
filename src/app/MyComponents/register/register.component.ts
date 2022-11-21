import {Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName } from '@angular/forms';
import {Router} from '@angular/router';
import {UserDataService} from '../../services/user-data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name :new FormControl(''),
    emailId :new FormControl(''),
    mobileNo :new FormControl(''),
    password :new FormControl(''),
  })

  constructor(private userData: UserDataService,private router:Router) { 
   
  }
  registerUser(){
    this.userData.addUsers(this.registerForm.value).subscribe((result)=>{
      console.log(result);
    })
    this.router.navigate(['/login']);
  }
  logIn(){
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
