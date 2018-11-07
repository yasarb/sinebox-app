import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CustomCarouselModule } from '../custom-carousel/custom-carousel.module';
import { MovieCardModule } from '../movie-card/movie-card.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CustomCarouselModule,
        MovieCardModule
    ],
    exports: [
        HomeComponent,
        CustomCarouselModule
    ],
})

export class HomeModule { }
