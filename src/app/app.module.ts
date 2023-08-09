import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./components/header/header.module";
import { CarouselModule } from './components/carousel/carousel.module';
import { CategoriesModule } from "./components/categories/categories.module";

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
        CategoriesModule
    ]
})
export class AppModule { }
