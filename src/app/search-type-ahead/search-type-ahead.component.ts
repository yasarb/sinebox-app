import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { MovieService } from '../core/movie.service';

@Component({
    selector: 'app-search-type-ahead',
    templateUrl: './search-type-ahead.component.html',
    styleUrls: ['./search-type-ahead.component.css']
})
export class SearchTypeAheadComponent implements OnInit {

    displayBar: boolean;
    searchTerm: string;
    startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
    endAt: BehaviorSubject<string | null> = new BehaviorSubject('\uf8ff');
    movies;

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.movieService.searchByTitle(this.startAt)
            .subscribe(movies => this.movies = movies);
        this.displayBar = true;
    }

    search($event): void {
        const q = $event.target.value;
        if (q !== '') {
            this.startAt.next(q);
        } else {
            this.movies = [];
        }
        this.displayBar = true;
    }

    hideSuggestionBar(): void {
        this.displayBar = false;
    }
}
