import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';


interface Message {
  message: string;
}
@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css']
})
export class ExternalApiComponent implements OnInit {
  message: string;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  callApi(): void {
    this.http
      .get(`${env.dev.serverUrl}/api/messages/public-message`)
      .subscribe((result: any) => {
        this.message = result.message;
      });
  }

  callSecureApi(): void {
    this.http
      .get(`${env.dev.serverUrl}/api/messages/protected-message`)
      .subscribe((result: any) => {
        this.message = result.message;
      });
  }
  

}
