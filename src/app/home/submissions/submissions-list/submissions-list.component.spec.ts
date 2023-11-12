import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsListComponent } from './submissions-list.component';

describe('SubmissionsListComponent', () => {
    let component: SubmissionsListComponent;
    let fixture: ComponentFixture<SubmissionsListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SubmissionsListComponent],
        });
        fixture = TestBed.createComponent(SubmissionsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
