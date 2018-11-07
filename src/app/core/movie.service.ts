import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { IMovie } from '../shared/interfaces';

@Injectable()
export class MovieService {
    private basePath = 'movies';

    constructor(private afs: AngularFirestore) { }

    getMoviesList() {
        const movies = this.afs.collection(this.basePath, ref => ref.orderBy('id')).valueChanges();
        return movies;
    }

    getMostPopularMovies(limit: number) {
        const movies = this.afs.collection(this.basePath, ref => {

            let ref_ = ref
                .where('release_date', '<', new Date())
                .orderBy('release_date', 'desc');

            // todo: sort according to imdb_rating

            if (limit > 0) {
                ref_ = ref_.limit(limit);
            }

            return ref_;
        }).valueChanges();

        return movies;
    }

    getMovieById(id: string) {
        const movie = this.afs.collection(this.basePath, ref => ref.where('id', '==', parseInt(id, 10))).valueChanges();
        return movie;
    }
}
