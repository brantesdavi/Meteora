import { GenericModalModule } from './../../../../generic-modal/generic-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    GenericModalModule,
    MatDialogModule
  ],
  exports:[
    ProductItemComponent
  ]
})
export class ProductItemModule { }
