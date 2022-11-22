import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isStatus : any;

  constructor(private router:Router,private userData :UserDataService) {

   }

  logout(){
    localStorage.removeItem("uid")
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    this.userData.nontificationSubject.subscribe((res:any)=>{
      this.isStatus = res;
    })
  }

}
