import { Component } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';
import { SubmissionsItem } from 'src/app/interfaces/submissions-item';

@Component({
    selector: 'app-submissions-list',
    templateUrl: './submissions-list.component.html',
    styleUrls: ['./submissions-list.component.scss'],
})
export class SubmissionsListComponent {
    submissionItems: Array<SubmissionsItem> = [];

    months: Array<string> = [];

    constructor(private constantService: ConstantsService) {
        this.submissionItems = this.constantService.getSubmissionItems();
        this.months = this.constantService.getMonths();
    }

    getReadableDate(date: Date) {
        const readableDate =
            date.getDate() + ' ' + this.months[date.getMonth()];
        return readableDate;
    }
}
