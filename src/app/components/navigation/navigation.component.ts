import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public navigationItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.navigationItems = [
      {
        icon: 'pi pi-fw pi-home',
        routerLink: '/dashboard',
      },
      {
        label: 'Timezone',
        icon: 'pi pi-fw pi-search',
        routerLink: '/dashboard/timezone',
      },
      {
        label: 'Stopwatch',
        icon: 'pi pi-fw pi-clock',
        routerLink: '/dashboard/stopwatch',
      }
    ];
  }

}
