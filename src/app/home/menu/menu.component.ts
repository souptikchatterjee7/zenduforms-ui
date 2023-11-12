import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    menuItems: any;

    constructor(
        private contantService: ConstantsService,
        private router: Router
    ) {
        this.menuItems = this.contantService.getConstant('menuItems');
    }

    goToPage(route: string) {
        this.router.navigate([route]);
    }
}
