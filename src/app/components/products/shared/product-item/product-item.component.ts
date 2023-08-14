import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { MatDialog } from '@angular/material/dialog'
import { ProductModalComponent } from './shared/product-modal/product-modal.component';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product = { imageSrc: '', imageAlt: '', name: '', desc: '', price: 0.00, colors: [
    {
      hexColor: '#FFFFFF',
      nameColor: 'Branco',
    },
  ],};

  constructor(private dialog: MatDialog){}

  openDialog(product: Product): void{
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: { product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }

  closeDialog(): void{
    if(this.dialog){
      this.dialog.closeAll()
    }
  }

}

