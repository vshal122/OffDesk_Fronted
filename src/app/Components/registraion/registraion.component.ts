import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from 'src/app/Service/user-register.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {

  
  user:User = new User("","","","","","","","",0,0);
  message:any;
 
  constructor(private userservice:UserRegisterService) { }

  ngOnInit(): void {
  }

  
 
  public registerNow()
  {
         let res=this.userservice.doRegistration(this.user);
         res.subscribe((data)=>this.message=data)
  }

}
