import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BootstrapModule } from './bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { NowPlayingModule } from './nowplaying/nowplaying.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        MaterialModule,
        BootstrapModule,
        CoreModule,
        AppRoutingModule,
        HomeModule,
        NowPlayingModule,
        CarouselModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
