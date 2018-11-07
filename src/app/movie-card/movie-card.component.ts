import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/interfaces';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit {

    private _movie: IMovie;

    constructor() { }

    ngOnInit() {
    }

    @Input() get movie(): IMovie {
        return this._movie;
    }

    set movie(val: IMovie) {
        this._movie = val;
    }

}
