import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sub-categories',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.scss'
})
export class SubCategoriesComponent implements OnInit {

  apiUrl: any = 'https://cloud-api.up.railway.app/';
  kioskData: any = [];
  id: string | null = null;

  constructor(private route: ActivatedRoute,private http: HttpClient) {  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMenuDetail();

  }

  getMenuDetail() {
    this.http.get(`${this.apiUrl}kioskmenu`).subscribe((res:any) => {
      this.kioskData = res.find((kiosk:any) => kiosk._id === this.id);
      console.log(this.kioskData?.children);
       
    });
  }
}
