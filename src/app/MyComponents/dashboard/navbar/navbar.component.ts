import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  
  constructor(private userData: UserDataService,private router:Router) { 
    userData.users().subscribe((data)=>{
      this.user=data;
      var uid =localStorage.getItem("uid");
      var found = this.user.filter((val:any)=>{return uid==val.id});
      this.user = found[0]?.name;
    });
  }

  ngOnInit(): void {
  }

}
