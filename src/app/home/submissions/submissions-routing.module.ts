import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubmissionsHomeComponent } from './submissions-home/submissions-home.component';

const routes: Routes = [
    {
        path: '',
        component: SubmissionsHomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SubmissionsRoutingModule {}
