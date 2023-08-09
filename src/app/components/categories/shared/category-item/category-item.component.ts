import { Component, Input } from '@angular/core';
import { Category }  from '../../../../models/category.interface'

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {

  @Input() category: Category = { imageSrc: '', imageAlt: '',  categoryName: ''};


  constructor() {}
}
