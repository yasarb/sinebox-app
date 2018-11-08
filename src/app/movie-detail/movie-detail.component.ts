import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { switchMap } from 'rxjs/operators';

import { MovieService } from '../core/movie.service';
import { IMovie } from '../shared/interfaces';

export interface DialogData {
    video_url: string;
}

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    private movie: IMovie;
    private posterItems: IMovie[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MovieService,
        private dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getMovieById(params.get('id')))
        ).subscribe((movies: IMovie[]) => {
            this.movie = movies[0];
            this.posterItems.push(this.movie);
        });
    }

    openTeaserDialog(): void {
        const dialogRef = this.dialog.open(VideoDialogComponent, {
            height: '370px',
            width: '595px',
            panelClass: 'dialog-transparent',
            backdropClass: 'dialog-backdrop',
            data: { video_id: this.movie.youtube_id }
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }

}

@Component({
    selector: 'app-video-dialog',
    templateUrl: 'video-dialog.html',
})
export class VideoDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<VideoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

}
