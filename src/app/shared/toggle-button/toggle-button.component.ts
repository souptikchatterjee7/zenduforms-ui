import { Component, Input } from '@angular/core';
import { SelectOption } from 'src/app/interfaces/select-option';

@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
    @Input() options: Array<SelectOption> = [];

    activeTab = 'map';

    selectOption(value: string) {
        this.activeTab = value;
    }
}
