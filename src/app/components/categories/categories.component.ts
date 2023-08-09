import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories = [
    {
      imageSrc:
        '../../../../../assets/categories/Categoria Bolsa.png',
      imageAlt: '',
      categoryName: 'Bolsas'
    },
    {
      imageSrc:
        '../../../../../assets/categories/Categoria calça.png',
      imageAlt: '',
      categoryName: 'Calças'
    },
    {
      imageSrc:
        '../../../../../assets/categories/Categoria Calçados.png',
      imageAlt: '',
      categoryName: 'Calçados'
    },
    {
      imageSrc:
        '../../../../../assets/categories/Categoria camiseta.png',
      imageAlt: '',
      categoryName: 'Camisetas'
    },
    {
      imageSrc:
        '../../../../../assets/categories/Categoria casacos.png',
      imageAlt: '',
      categoryName: 'Casacos'
    },
    {
      imageSrc:
        '../../../../../assets/categories/Categoria óculos.png',
      imageAlt: '',
      categoryName: 'Óculos'
    },
  ]

}
