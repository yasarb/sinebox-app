import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/movie.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    carouselItems: Observable<any[]>;
    movies: Observable<any[]>;

    constructor(movieService: MovieService) {
        this.carouselItems = movieService.getMostPopularMovies(3);
        this.movies = movieService.getMoviesList();
    }

    ngOnInit() {
    }

}
