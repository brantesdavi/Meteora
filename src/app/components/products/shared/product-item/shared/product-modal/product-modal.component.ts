import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {

  backgroundColor = '#75D7F0';

  sizes: string[] = ['P', 'PP', 'M', 'G', 'GG'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product: Product },
  private dialog: MatDialogRef<ProductModalComponent> ) { }

  closeDialog(): void{
    this.dialog.close();
  }


}
