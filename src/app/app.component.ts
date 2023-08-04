import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meteora';

  images = [
    {
      imageSrc:
        '../assets/Banner carousel 1 _ 1440 (1).png',
      imageAlt: '',
    },
    {
      imageSrc:
        '../assets/Banner carousel 2 _ 1440 (1).png',
      imageAlt: '',
    },
    {
      imageSrc:
        '../assets/Banner carousel 3 _ 1440 (1).png',
      imageAlt: '',
    }
  ]
}
