import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  baseurl="http://localhost:8081"

  constructor(private http:HttpClient) { }

  getUserDetails()
  {

  return this.http.get(`${this.baseurl}/offdesk/user/all_employee`);

  }
}
