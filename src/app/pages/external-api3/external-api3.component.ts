import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
interface Data{
  data:string;

}
@Component({
  selector: 'app-external-api3',
  templateUrl: './external-api3.component.html',
  styleUrls: ['./external-api3.component.css']
})
export class ExternalApi3Component implements OnInit {
  data:string;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  callSecureApi2(): void {
    this.http
      .get(`${env.dev.serverUrl}/lists`)
      .subscribe((result: any) => {
        console.log(result);
        this.data = JSON.stringify(result);
      });
  }

}
