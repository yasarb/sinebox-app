import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Injectable()
export class MovieService {
    private basePath = 'movies';

    constructor(private afs: AngularFirestore) { }

    getMoviesList(order) {
        const movies = this.afs.collection(this.basePath, ref => ref.orderBy(order)).valueChanges();
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

    searchByTitle(start: BehaviorSubject<string>): Observable<any[]> {
        return start.pipe(switchMap(startText => {
            startText = startText.charAt(0).toUpperCase() + startText.slice(1);
            const endText = startText + '\uf8ff';
            const var1 = this.afs
                .collection('/movies', ref =>
                    ref
                        .orderBy('title')
                        .limit(3)
                        .startAt(startText)
                        .endAt(endText)
                )
                .snapshotChanges();
            const var2 = var1
                .pipe(debounceTime(100),
                    distinctUntilChanged());
            const var3 = var2.pipe(
                map(changes => {
                    return changes.map(c => {
                        return { key: c.payload.doc.id, ...c.payload.doc.data() };
                    });
                }));
            return var3;
        }));
    }
}

