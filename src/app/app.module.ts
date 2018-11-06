import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BootstrapModule } from './bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
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
        MaterialModule,
        BootstrapModule,
        AppRoutingModule,
        HomeModule,
        NowPlayingModule,
        CarouselModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
