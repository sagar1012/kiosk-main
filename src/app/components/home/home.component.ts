import { Component } from '@angular/core';
import { CommonHttpService } from '../../services/common-http.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  apiUrl: any = 'https://cloud-api.up.railway.app/';
  kioskData: any = [];

  constructor(private http: HttpClient) {
    this.getMenuDetail();
  }


  getMenuDetail() {
    this.http.get(`${this.apiUrl}kioskmenu`).subscribe(res => {
      this.kioskData = res;
    });
  }

}
