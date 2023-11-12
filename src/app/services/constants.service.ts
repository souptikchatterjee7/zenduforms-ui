import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-items';
import { SubmissionsItem } from '../interfaces/submissions-item';
import { SelectOption } from '../interfaces/select-option';

@Injectable({
    providedIn: 'root',
})
export class ConstantsService {
    menuItems: Array<MenuItem> = [];

    submissionItems: Array<SubmissionsItem> = [];

    months: Array<string> = [];

    formOptions: Array<SelectOption> = [];

    statusOptions: Array<SelectOption> = [];

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

        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        this.formOptions = [
            {
                displayName: 'Form Type 1',
                value: 'form-1',
            },
            {
                displayName: 'Form Type 2',
                value: 'form-2',
            },
            {
                displayName: 'Form Type 3',
                value: 'form-3',
            },
            {
                displayName: 'Form Type 4',
                value: 'form-4',
            },
            {
                displayName: 'Form Type 5',
                value: 'form-5',
            },
        ];

        this.statusOptions = [
            {
                displayName: 'Status Type 1',
                value: 'status-1',
            },
            {
                displayName: 'Status Type 2',
                value: 'status-2',
            },
            {
                displayName: 'Status Type 3',
                value: 'status-3',
            },
            {
                displayName: 'Status Type 4',
                value: 'status-4',
            },
            {
                displayName: 'Status Type 5',
                value: 'status-5',
            },
        ];
    }

    getMenuItems() {
        return this.menuItems;
    }

    getMonths() {
        return this.months;
    }

    getFormOptions() {
        return this.formOptions;
    }

    getStatusOptions() {
        return this.statusOptions;
    }
}
