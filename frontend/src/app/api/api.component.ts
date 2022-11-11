import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const body = {
      "title": "string",
      "description": "string",
      "images": "string",
      "category": "string"
    }
    this.http.post('http://localhost:8000/api/articles', body).subscribe();
  }

}
