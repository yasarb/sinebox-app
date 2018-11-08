import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent, VideoDialogComponent } from './movie-detail.component';
import { CustomCarouselModule } from '../custom-carousel/custom-carousel.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MovieDetailComponent,
        VideoDialogComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        YoutubePlayerModule,
        MovieDetailRoutingModule,
        CustomCarouselModule,
        SharedModule
    ],
    exports: [
        MovieDetailComponent,
        VideoDialogComponent
    ],
    entryComponents: [
        VideoDialogComponent
    ]
})
export class MovieDetailModule { }
