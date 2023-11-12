import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { SubmissionsHomeComponent } from './submissions-home/submissions-home.component';
import { SubmissionsMapComponent } from './submissions-map/submissions-map.component';

@NgModule({
    declarations: [SubmissionsListComponent, SubmissionsHomeComponent, SubmissionsMapComponent],
    imports: [CommonModule, SubmissionsRoutingModule],
})
export class SubmissionsModule {}
