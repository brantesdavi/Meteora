import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalComponent } from './product-modal.component';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    ProductModalComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports: [
    ProductModalComponent
  ]
})
export class ProductModalModule { }
