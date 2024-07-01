import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { DetailContentComponent } from './components/detail-content/detail-content.component';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'category/:id',
        component: CategoryComponent,
    },
    {
        path: 'sub-categories/:id/:name/:index',
        component: SubCategoriesComponent,
    },
    {
        path: 'category-detail',
        component: DetailContentComponent,
    },
    {
        path: 'weather',
        component: WeatherComponent,
    }
];
