import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BootstrapModule } from './bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchTypeAheadComponent } from './search-type-ahead/search-type-ahead.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { NowPlayingModule } from './nowplaying/nowplaying.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MovieDetailModule } from './movie-detail/movie-detail.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SearchTypeAheadComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        MaterialModule,
        BootstrapModule,
        CoreModule,
        SharedModule,
        HomeModule,
        NowPlayingModule,
        CarouselModule.forRoot(),
        MovieDetailModule,
        AppRoutingModule,
        PageNotFoundModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
