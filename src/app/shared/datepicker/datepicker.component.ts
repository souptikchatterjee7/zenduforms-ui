import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
    @Input() placeholder = '';

    dateModel = new Date();

    displayModel = '';

    constructor() {
        this.displayModel = this.getFormattedDate(this.dateModel);
    }

    emitDateChange() {
        this.displayModel = this.dateModel.toISOString();
        this.getDisplayInput();
    }

    getDisplayInput() {
        this.displayModel =
            this.displayModel === ''
                ? ''
                : this.getFormattedDate(this.dateModel);
    }

    getFormattedDate(date: Date) {
        const readableDate =
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear();
        return readableDate;
    }
}
