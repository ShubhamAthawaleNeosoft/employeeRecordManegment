import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isStatus : any;
  constructor(private userData :UserDataService) { }

  ngOnInit(): void {
    this.userData.nontificationSubject.subscribe((res:any)=>{
      this.isStatus = res;
    })
  }

}
