import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/Service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
     username:'',
     password:''

  }

  constructor(private loginService:LoginserviceService) { }

  ngOnInit(): void {
  }
  customSubmit()
  {
    if((this.credentials.username !='' && this.credentials.password !='') && (this.credentials.username !=null && this.credentials.password !=null) )
    {
        
         console.log("We have Submit the form");

        this.loginService.generateToken(this.credentials).subscribe(
          (Response:any)=>{
               console.log(Response.token);
               this.loginService.loginUser(Response.token);
               window.location.href="/dashboard"
          },
         Error=>{
                  console.log("Log Response Error");
                  
          }
        )
    } 
    else{
      console.log("Credentials are not valid");
      
    }
  }
  
  
  
  
  


}
