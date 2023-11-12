import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-items';
import { SubmissionsItem } from '../interfaces/submissions-item';
import { SelectOption } from '../interfaces/select-option';
import { GoogleMarker } from 'src/app/interfaces/google-marker';

@Injectable({
    providedIn: 'root',
})
export class ConstantsService {
    menuItems: Array<MenuItem> = [];

    submissionItems: Array<SubmissionsItem> = [];

    months: Array<string> = [];

    formOptions: Array<SelectOption> = [];

    statusOptions: Array<SelectOption> = [];

    toggleOptions: Array<SelectOption> = [];

    markers: Array<GoogleMarker> = [];

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
                status: 'Uncomplete',
            },
            {
                from: 'denisgordiyenya@gmail.com',
                to: 'denisgordiyenya@gmail.com',
                dueDate: new Date('2023-12-06'),
                status: 'Low Risk',
            },
            {
                from: 'denisgordiyenya@gmail.com',
                to: 'denisgordiyenya@gmail.com',
                dueDate: new Date('2023-12-06'),
                status: 'Uncomplete',
            },
            {
                from: 'denisgordiyenya@gmail.com',
                to: 'denisgordiyenya@gmail.com',
                dueDate: new Date('2023-12-06'),
                status: 'Needs Review',
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

        this.toggleOptions = [
            {
                displayName: 'Map',
                value: 'map',
            },
            {
                displayName: 'List',
                value: 'list',
            },
        ];

        this.markers = [
            {
                lat: 12.912427,
                lng: 77.647178,
            },
            {
                lat: 12.913263,
                lng: 77.640441,
            },
            {
                lat: 12.908369,
                lng: 77.646534,
            },
            {
                lat: 12.912803,
                lng: 77.648337,
            },
            {
                lat: 12.915815,
                lng: 77.64499,
            },
            {
                lat: 12.91198,
                lng: 77.652032,
            },
        ];
    }

    getMenuItems() {
        return this.menuItems;
    }

    getSubmissionItems() {
        return this.submissionItems;
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

    getToggleOptions() {
        return this.toggleOptions;
    }

    getMarkers() {
        return this.markers;
    }
}
