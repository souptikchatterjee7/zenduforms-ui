import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConstantsService {
    config: any = {};

    constructor() {}

    getConstant(key: string) {
        if (!this.config[key]) return null;
        return JSON.parse(JSON.stringify(this.config[key]));
    }
}
