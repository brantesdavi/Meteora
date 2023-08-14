export interface Product{
  imageSrc: string;
  imageAlt: string;
  name: string;
  desc: string;
  price: number;
  colors: { hexColor: string; nameColor: string; }[];
}

