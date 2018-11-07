import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../shared/interfaces';

@Component({
    selector: 'app-custom-carousel',
    templateUrl: './custom-carousel.component.html',
    styleUrls: ['./custom-carousel.component.css']
})

export class CustomCarouselComponent implements OnInit {

    private _items: IMovie[];

    constructor() {
    }

    @Input() get items(): IMovie[] {
        return this._items;
    }

    set items(val: IMovie[]) {
        this._items = val;
        this.changed.emit(this.items);
    }

    @Output() changed: EventEmitter<IMovie[]> = new EventEmitter<IMovie[]>();

    ngOnInit() {

    }

}
