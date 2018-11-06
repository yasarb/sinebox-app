import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot()
    ],
    exports: [
        BsDropdownModule,
        CarouselModule
    ]
})

export class BootstrapModule { }
