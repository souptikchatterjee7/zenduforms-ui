import { Component } from '@angular/core';
import { SelectOption } from 'src/app/interfaces/select-option';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
    selector: 'app-submissions-filters',
    templateUrl: './submissions-filters.component.html',
    styleUrls: ['./submissions-filters.component.scss'],
})
export class SubmissionsFiltersComponent {
    formOptions: Array<SelectOption> = [];

    statusOptions: Array<SelectOption> = [];

    constructor(private constantService: ConstantsService) {
        this.formOptions = this.constantService.getFormOptions();
        this.statusOptions = this.constantService.getStatusOptions();
    }
}
