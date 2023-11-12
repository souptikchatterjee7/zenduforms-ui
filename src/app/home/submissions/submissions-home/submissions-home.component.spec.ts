import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsHomeComponent } from './submissions-home.component';

describe('SubmissionsHomeComponent', () => {
    let component: SubmissionsHomeComponent;
    let fixture: ComponentFixture<SubmissionsHomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SubmissionsHomeComponent],
        });
        fixture = TestBed.createComponent(SubmissionsHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
