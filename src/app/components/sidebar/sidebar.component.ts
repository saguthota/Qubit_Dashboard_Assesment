import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user-profile', title: 'User Details',  icon:'', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: '', class: '' },    
    { path: '/table-list', title: 'IPL_Table',  icon:'', class: '' },
    { path: '/notifications', title: 'IPL_Notifications',  icon:'', class: '' },
    ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
