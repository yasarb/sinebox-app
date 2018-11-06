import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowPlayingComponent } from './nowplaying.component';

const routes: Routes = [
    { path: 'nowplaying', component: NowPlayingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NowPlayingRoutingModule { }
