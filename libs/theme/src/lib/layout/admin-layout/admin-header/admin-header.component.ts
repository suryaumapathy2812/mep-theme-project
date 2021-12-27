import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavRoute, ThemeService } from '../../../core/shared/theme.service';
import { AdminLayoutService } from '../admin-layout.service';

@Component({
  selector: 'mep-admin-header',
  templateUrl: './admin-header.component.html',
  styles: [
  ]
})
export class AdminHeaderComponent implements OnInit {

  navItems!: Observable<NavRoute[]>;
  showSidebar!: Observable<boolean>;

  constructor(
    private adminLayoutService: AdminLayoutService,
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    this.showSidebar = this.adminLayoutService.showSidebar;
    this.navItems = this.themeService.navList;
  }

  toggleSidebar() {
    this.adminLayoutService.toggleSidebar();
  }
}
