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
  getUserbyEmail(gmail:string)
 {
     return this.http.get(`${this.baseurl}/offdesk/user/getuserbyemail/${gmail}`);
 }
 getLeaveRecordByEmail(gmail:string)
 {
  return this.http.get(`${this.baseurl}/offdesk/leave/getleaveuserbyemail/${gmail}`);
 }

 takeLeave(leavedetails:any)
 {
  return this.http.post(`${this.baseurl}/offdesk/leave/save`,leavedetails,{responseType:"text" as "json"});
 }

}
 