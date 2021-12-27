import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../core/shared/theme.service';

@Component({
  selector: 'mep-auth-layout',
  templateUrl: './auth-layout.component.html',
  styles: [
  ]
})
export class AuthLayoutComponent implements OnInit {

  srcWidth!: number;

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.srcWidth.subscribe(res => this.srcWidth = res);
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    const height = window.innerHeight;
    this.themeService.updateSrcHeight(height);
    const width = window.innerWidth;
    this.themeService.updateSrcWidth(width);
  }
}
