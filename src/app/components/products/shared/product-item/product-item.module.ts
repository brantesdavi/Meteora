import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductModalModule } from './shared/product-modal/product-modal.module';



@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProductModalModule
  ],
  exports:[
    ProductItemComponent
  ]
})
export class ProductItemModule { }
