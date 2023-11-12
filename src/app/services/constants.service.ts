import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-items';
import { SubmissionsItem } from '../interfaces/submissions-item';

@Injectable({
    providedIn: 'root',
})
export class ConstantsService {
    menuItems: Array<MenuItem> = [];

    submissionItems: Array<SubmissionsItem> = [];

    constructor() {
        this.menuItems = [
            {
                displayName: 'Forms',
                value: 'forms',
            },
            {
                displayName: 'Consumers',
                value: 'consumers',
            },
            {
                displayName: 'Submissions',
                value: 'submissions',
            },
            {
                displayName: 'History',
                value: 'history',
            },
            {
                displayName: 'Reports',
                value: 'reports',
            },
            {
                displayName: 'Workflow',
                value: 'workflow',
            },
        ];

        this.submissionItems = [
            {
                from: 'denisgordiyenya@gmail.com',
                to: 'denisgordiyenya@gmail.com',
                dueDate: new Date('2023-12-06'),
                qualification: 'Uncomplete',
            },
            {
                from: 'denisgordiyenya@gmail.com',
                to: 'denisgordiyenya@gmail.com',
                dueDate: new Date('2023-12-06'),
                qualification: 'Low Risk',
            },
            {
                from: 'denisgordiyenya@gmail.com',
                to: 'denisgordiyenya@gmail.com',
                dueDate: new Date('2023-12-06'),
                qualification: 'Uncomplete',
            },
            {
                from: 'denisgordiyenya@gmail.com',
                to: 'denisgordiyenya@gmail.com',
                dueDate: new Date('2023-12-06'),
                qualification: 'Needs Review',
            },
        ];
    }

    getMenuItems() {
        return this.menuItems;
    }
}
