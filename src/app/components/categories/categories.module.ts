import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryItemModule } from './shared/category-item/category-item.module';



@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        CategoryItemModule
    ],
    exports: [
      CategoriesComponent
    ]
})
export class CategoriesModule { }
