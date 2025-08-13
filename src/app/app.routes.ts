import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HomeContentComponent } from './modules/home/components/home-content/home-content.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // mặc định chuyển đến home
    { path: 'home', component: HomeContentComponent },
];
