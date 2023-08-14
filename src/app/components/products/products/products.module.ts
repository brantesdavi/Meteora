import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductItemModule } from './shared/product-item/product-item.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductItemModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class ProductsModule { }
