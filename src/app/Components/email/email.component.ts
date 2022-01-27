import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BackedService } from 'src/app/Service/backed.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to: " ",
    Subject: " ",
    message:" "
  }

  constructor(private email:BackedService) { }

  ngOnInit(): void {
  }

  doSubmit()
  {
    console.log("Try to submit Form");
    console.log("DATA",this.data);
    this.email.SendEmail(this.data).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
       console.log(error);
      }
    )

  }

}
