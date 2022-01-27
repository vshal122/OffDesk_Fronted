import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../Service/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  constructor(private logservice:LoginserviceService) { }

  ngOnInit(): void {
    this.loggedIn = this.logservice.isLoggedIn();
  }

  logOut()
  {
    this.logservice.logout();
    location.reload();
    window.location.href="/login";
  }
  logIn()
  {
    window.location.href="/login";
  }
  register()
  {
    window.location.href="/registration";
  }
  homePage(){
    window.location.href="/home";
  }
  Dashboar(){
    window.location.href="/dashboard";
  }

}
