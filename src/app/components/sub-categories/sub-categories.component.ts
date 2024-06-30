import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
  parentData: any = [];
  childData: any = [];
  title: string | null = null;
  selectedCategory: any = 0;
  itemIndex: any = 0;
  detailData: any;
  isDetailView: boolean = false;
  selectedIndex: any = 0;
  lastData: any;
  detailDecs:any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('name');
    this.itemIndex = this.route.snapshot.paramMap.get('index');
    this.selectedCategory = this.itemIndex;
    this.getMenuDetail();

  }

  getMenuDetail() {
    this.http.get(`${this.apiUrl}kioskmenu`).subscribe((res: any) => {
      this.kioskData = res.find((kiosk: any) => kiosk._id === this.id);
      this.parentData = this.kioskData?.children;
      this.childData = (this.parentData.find((item: any) => item.title === this.title))?.children;
    });
  }

  tabChange(index: any) {
    console.log('ontab', index);

    this.selectedCategory = index;
    this.childData = (this.parentData.find((item: any) => item.title === this.parentData[index]['title']))?.children;
    if (this.childData.length) {
      this.isDetailView = false;
    } else {
      // this.childData = this.parentData[index]?.children;
      this.childData = this.lastData;
      this.detailDecs = this.childData[index]?.description;
      this.isDetailView = true;

    }

  }

  onChildSelect(index: any) {

    this.selectedIndex = index;
    this.selectedCategory = index;
    if (this.childData[index]?.children?.length) {
      this.isDetailView = false;
      this.parentData = this.childData;
      this.childData = (this.parentData.find((item: any) => item.title === this.parentData[index]['title']))?.children;

    } else {
      this.isDetailView = true;
      this.parentData = this.childData;
      this.detailDecs = this.childData[index]?.description;
      // this.router.navigate(['/category-detail'], { queryParams: this.detailData });

    }
    if (this.childData.length) {
      this.lastData = this.childData;
    } else {
      // this.childData = this.lastData;
    }

  }
}
