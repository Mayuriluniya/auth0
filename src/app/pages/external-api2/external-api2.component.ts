import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-external-api2',
  templateUrl: './external-api2.component.html',
  styleUrls: ['./external-api2.component.css']
})
export class ExternalApi2Component implements OnInit {
  message2:string;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  callApi2(): void {
    this.http
      .get(`${env.dev.serverUrl}`)
      .subscribe((response) => {
        this.message2 = JSON.stringify(response);
        
      });
  }

}
