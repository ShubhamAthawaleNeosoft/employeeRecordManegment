import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;

  constructor(private userData: UserDataService) {}

  ngOnInit(): void {
    this.userData.users().subscribe((data)=>{
      this.user=data;
      var uid =localStorage.getItem("uid");
      var found = this.user.filter((val:any)=>{return uid==val._id});
      this.user = found[0];
      console.log(this.user)
    });
  }

}
