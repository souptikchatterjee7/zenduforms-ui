import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideButtonComponent } from './side-button.component';

describe('SideButtonComponent', () => {
    let component: SideButtonComponent;
    let fixture: ComponentFixture<SideButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SideButtonComponent],
        });
        fixture = TestBed.createComponent(SideButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
