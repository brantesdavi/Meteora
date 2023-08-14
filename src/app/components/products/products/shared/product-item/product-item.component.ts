import { GenericModalComponent } from './../../../generic-modal/generic-modal.component';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product = { imageSrc: '', imageAlt: '', name: '', desc: '', price: 0.00};

  constructor(private dialog: MatDialog){}

  openDialog(product: Product): void{
    const dialogRef = this.dialog.open(GenericModalComponent, {
      data: { product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }

}

