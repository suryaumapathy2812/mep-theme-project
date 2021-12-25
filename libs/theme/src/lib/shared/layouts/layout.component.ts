import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'mep-layout',
  templateUrl: "./layout.component.html",
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  layoutType!: string;

  constructor(
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.layoutType = this.sharedService.layout;

    this.activatedRoute
      .paramMap.subscribe(res => console.log(res))


    this.activatedRoute
      .data.subscribe(res => {
        console.log(res);
        const layout = res["layout"];
        if (layout) this.layoutType = res["layout"];
        console.log(this.layoutType)
      })

  }

}
