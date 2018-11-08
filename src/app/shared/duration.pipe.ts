import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            const hour = value / 60;
            const min = value % 60;

            return hour.toFixed(0) + 'h ' + min + 'm';
        }

        return value;
    }
}
