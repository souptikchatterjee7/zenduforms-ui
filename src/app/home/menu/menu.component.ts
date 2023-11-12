import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';
import { MenuItem } from '../../interfaces/menu-items';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    menuItems: Array<MenuItem>;

    activeTab = '';

    constructor(
        private contantService: ConstantsService,
        private router: Router
    ) {
        this.menuItems = this.contantService.getMenuItems();
        this.checkRoute(this.router.url);
    }

    checkRoute(route: string) {
        route = route.split('/')[1];
        this.activeTab = route;
    }
}
