import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsFiltersComponent } from './submissions-filters.component';

describe('SubmissionsFiltersComponent', () => {
    let component: SubmissionsFiltersComponent;
    let fixture: ComponentFixture<SubmissionsFiltersComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SubmissionsFiltersComponent],
        });
        fixture = TestBed.createComponent(SubmissionsFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
