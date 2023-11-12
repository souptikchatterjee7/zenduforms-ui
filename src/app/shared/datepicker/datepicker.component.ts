import { Component, Input } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
    @Input() placeholder = '';

    dateModel = new Date();

    displayModel = '';

    months: Array<string> = [];

    constructor(private constantService: ConstantsService) {
        this.months = this.constantService.getMonths();
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
            date.getDate() + ' ' + this.months[date.getMonth()];
        return readableDate;
    }
}
