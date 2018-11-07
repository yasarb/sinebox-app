import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


import { MovieCardComponent } from './movie-card.component';

@NgModule({
    declarations: [
        MovieCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule
    ],
    exports: [
        MovieCardComponent,
        MatCardModule
    ]
})

export class MovieCardModule { }
