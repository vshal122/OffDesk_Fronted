import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/Service/user-profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tempuserData: boolean=false;

  allProfiles: any;

  constructor(private userprofile:UserProfileService) { }

  ngOnInit(): void {
  }
  getUserProfile()
  {
          this.userprofile.getUserDetails().subscribe(
          Response=>{
              this.allProfiles = Response;
              this.tempuserData=true;
               console.log(Response);
          },
          error=>{
               console.log(error);
          }

          )
  }


}
