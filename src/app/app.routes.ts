import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';

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
        path: 'sub-categories/:id/:name',
        component: SubCategoriesComponent,
    }
];
