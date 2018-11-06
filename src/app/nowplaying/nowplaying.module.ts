import { NgModule } from '@angular/core';

import { NowPlayingComponent } from './nowplaying.component';
import { NowPlayingRoutingModule } from './nowplaying-routing.module';

@NgModule({
    declarations: [
        NowPlayingComponent
    ],
    imports: [
        NowPlayingRoutingModule
    ],
    exports: [
        NowPlayingComponent
    ]
})

export class NowPlayingModule { }
