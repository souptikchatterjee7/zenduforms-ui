import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'submissions',
                loadChildren: () =>
                    import('./submissions/submissions.module').then(
                        (m) => m.SubmissionsModule
                    ),
            },
            {
                path: '**',
                redirectTo: 'submissions',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
