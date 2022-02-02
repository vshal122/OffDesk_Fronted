import { Component, Input, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { UserProfileService } from 'src/app/Service/user-profile.service';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  selector: 'app-dashboard-developer',
  templateUrl: './dashboard-developer.component.html',
  styleUrls: ['./dashboard-developer.component.css']
})
export class DashboardDeveloperComponent implements OnInit {
  newtoken:any;
  base64Url:any;
  decodedValue:any;
  email : string="";
  leaveRecord:any;
  tempVar:boolean=false;
  tempVar2 :boolean=false;

  leavedetails={
          fromDate:"",
          endDate:"",
          leaveStatus:"waiting",
          userLeaveId: 0

        }
  constructor(private userservice:UserProfileService,private loginservice:LoginserviceService) { }

  ngOnInit(): void {
  }
    checkLeaveBalance(){
       this.newtoken= this.loginservice.getToken();
       this.base64Url =this.newtoken.split('.')[1];
       this.decodedValue = JSON.parse(window.atob(this.base64Url));
         this.email=this.decodedValue["sub"];
        this.userservice.getLeaveRecordByEmail(this.email).subscribe(
          (Response:any)=>{
                 
                 this.leaveRecord=Response;
                 console.log(Response);
                 this.tempVar=true;
                 this.tempVar2=false;
          },
          (Error)=>{
              console.log("Check Leave Balance Error");
          }
        )
       
     }

    InleaveForm()
    {
      this.tempVar2=true;
      this.tempVar=false;
    }


     leaveSubmit(){
        this.leavedetails.userLeaveId=106;
      
       this.userservice.takeLeave(this.leavedetails).subscribe(
        (Response:any)=>
        {
          console.log(Response);
         
        },
        (Error)=>{
          console.log("Submit leave  Error");
        }
      )
     }


}
