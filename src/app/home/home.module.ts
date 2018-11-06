import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CustomCarouselModule } from '..//custom-carousel/custom-carousel.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CustomCarouselModule
    ],
    exports: [
        HomeComponent,
        CustomCarouselModule
    ],
})

export class HomeModule { }
