import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../core/movie.service';
import { IMovie } from '../shared/interfaces';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    private movie: IMovie;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MovieService
    ) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getMovieById(params.get('id')))
        ).subscribe((movies: IMovie[]) => this.movie = movies[0]);
    }
}
