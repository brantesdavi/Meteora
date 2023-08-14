import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {
      imageSrc:
        '../../../assets/products/Camiseta.png',
      imageAlt: '',
      name: 'Camiseta Conforto',
      desc: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
      price: 70.5,
      colors: [
        {
          hexColor: "#75D7F0",
          nameColor: "Azul claro"
        },
        {
          hexColor: "#DEE2E6",
          nameColor: "Offwhite"
        },
        {
          hexColor: "#000000",
          nameColor: "Preto"
        },
      ]
    },
    {
      imageSrc:
      '../../../assets/products/Calça.png',
      imageAlt: '',
      name: 'Calça Alfaiataria',
      desc: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
      price: 180.0,
      colors: [
        {
          hexColor: "#75D7F0",
          nameColor: "Azul claro"
        },
        {
          hexColor: "#DEE2E6",
          nameColor: "Offwhite"
        },
        {
          hexColor: "#000000",
          nameColor: "Preto"
        },
      ]
    },
    {
      imageSrc:
      '../../../assets/products/Tenis.png',
      imageAlt: '',
      name: 'Tênis Chunky',
      desc: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
      price: 250.0,
      colors: [
        {
          hexColor: "#75D7F0",
          nameColor: "Azul claro"
        },
        {
          hexColor: "#DEE2E6",
          nameColor: "Offwhite"
        },
        {
          hexColor: "#000000",
          nameColor: "Preto"
        },
      ]
    },
    {
      imageSrc:
      '../../../assets/products/Jaqueta.png',
      imageAlt: '',
      name: 'Jaqueta Jeans',
      desc: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
      price: 150.0,
      colors: [
        {
          hexColor: "#75D7F0",
          nameColor: "Azul claro"
        },
        {
          hexColor: "#DEE2E6",
          nameColor: "Offwhite"
        },
        {
          hexColor: "#000000",
          nameColor: "Preto"
        },
      ]
    },
    {
      imageSrc:
      '../../../assets/products/óculos.png',
      imageAlt: '',
      name: 'Óculos Redondo',
      desc: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
      price: 120.0,
      colors: [
        {
          hexColor: "#75D7F0",
          nameColor: "Azul claro"
        },
        {
          hexColor: "#DEE2E6",
          nameColor: "Offwhite"
        },
        {
          hexColor: "#000000",
          nameColor: "Preto"
        },
      ]
    },
    {
      imageSrc:
      '../../../assets/products/Bolsa.png',
      imageAlt: '',
      name: 'Bolsa coringa',
      desc: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
      price: 120.0,
      colors: [
        {
          hexColor: "#75D7F0",
          nameColor: "Azul claro"
        },
        {
          hexColor: "#DEE2E6",
          nameColor: "Offwhite"
        },
        {
          hexColor: "#000000",
          nameColor: "Preto"
        },
      ]
    },

  ]

}
