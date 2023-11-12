import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConstantsService {
    config: any = {};

    constructor() {
        this.config.menuItems = [
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
    }

    getConstant(key: string) {
        if (!this.config[key]) return null;
        return JSON.parse(JSON.stringify(this.config[key]));
    }
}
