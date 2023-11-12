import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { SideButtonComponent } from './side-button/side-button.component';

@NgModule({
    declarations: [
        DatepickerComponent,
        SingleSelectComponent,
        SearchInputComponent,
        ToggleButtonComponent,
        SideButtonComponent,
    ],
    imports: [CommonModule],
    exports: [
        DatepickerComponent,
        SingleSelectComponent,
        SearchInputComponent,
        ToggleButtonComponent,
        SideButtonComponent,
    ],
})
export class SharedModule {}
