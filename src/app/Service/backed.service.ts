import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackedService {

  private baseUrl:String="http://localhost:9091"
  constructor(private http:HttpClient) { }

  SendEmail(data:any)
  {
    return this.http.post(`${this.baseUrl}/SendMail`,data)
  }
}
