import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContentComponent } from './components/home-content/home-content.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, HomeComponent, HomeContentComponent],
})
export class HomeModule { }
