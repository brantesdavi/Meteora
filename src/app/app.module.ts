import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./components/header/header.module";
import { CarouselModule } from './components/carousel/carousel.module';
import { CategoriesModule } from "./components/categories/categories.module";
import { ProductsModule } from './components/products/products.module';
import { FacilitiesModule } from './components/facilities/facilities.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        CarouselModule,
        CategoriesModule,
        ProductsModule,
        FacilitiesModule,
        FooterModule
    ]
})
export class AppModule { }
