import { Component, Input, OnInit } from '@angular/core';
import { carouselImage } from '../../models/carouselImage.interface'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  ngOnInit(): void {

  }

  selectImage(index:number):void{
    this.selectedIndex = index;
  }

}
