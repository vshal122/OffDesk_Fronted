import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from 'src/app/Service/user-register.service';
import { User } from 'src/app/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {

  
  user:User = new User("","","","","","","","",0,"");
  message:any;
 
  constructor(private userservice:UserRegisterService) { }

  ngOnInit(): void {
  }

  
 
  public registerNow()
  {
         let res=this.userservice.doRegistration(this.user);
         res.subscribe((data)=>{this.message=data
              Swal.fire({text:"Registration successfull",timer:6000})
         },
              (Error)=>{
                console.log("Registration Error");
                
              }
              
              
         )
  }

}
