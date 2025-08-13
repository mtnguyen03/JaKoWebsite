import { Component } from '@angular/core';
import { HomeContentComponent } from "./components/home-content/home-content.component";

// home.component.ts
@Component({
  selector: 'app-home',
  template: `
    <h1>Home Page</h1>
    <app-home-content></app-home-content>
  `,
  imports: [HomeContentComponent]
})
export class HomeComponent { }
