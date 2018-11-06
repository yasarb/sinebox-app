import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

import { CustomCarouselComponent } from './custom-carousel.component';

@NgModule({
    declarations: [
        CustomCarouselComponent
    ],
    imports: [
        CommonModule,
        CarouselModule.forRoot()
    ],
    exports: [
        CustomCarouselComponent
    ],
    providers: [
        { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
    ]
})
export class CustomCarouselModule { }
