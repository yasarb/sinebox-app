import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/movie.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private carouselItems: Observable<any[]>;

    constructor(movieService: MovieService) {
        this.carouselItems = movieService.getMostPopularMovies(3);
        // console.log(this.carouselItems);
    }

    ngOnInit() {
    }

}
