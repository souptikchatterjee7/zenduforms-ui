import { Component, Input } from '@angular/core';
import { SelectOption } from 'src/app/interfaces/select-option';

@Component({
    selector: 'app-single-select',
    templateUrl: './single-select.component.html',
    styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent {
    @Input() placeholder = '';

    @Input() options: Array<SelectOption> = [];

    selectedOption = '';
}
