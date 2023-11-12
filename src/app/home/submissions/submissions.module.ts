import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { SubmissionsHomeComponent } from './submissions-home/submissions-home.component';
import { SubmissionsMapComponent } from './submissions-map/submissions-map.component';
import { SharedModule } from '../../shared/shared.module';
import { SubmissionsFiltersComponent } from './submissions-filters/submissions-filters.component';

@NgModule({
    declarations: [
        SubmissionsListComponent,
        SubmissionsHomeComponent,
        SubmissionsMapComponent,
        SubmissionsFiltersComponent,
    ],
    imports: [CommonModule, SubmissionsRoutingModule, SharedModule],
})
export class SubmissionsModule {}
