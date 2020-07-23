import { Component, OnInit } from '@angular/core';

import { OnDemandPreloadService } from './../strategies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private preloadOnDemandService: OnDemandPreloadService) { }

  ngOnInit(): void {
  }

  public preloadBundle(routePath): void {
    this.preloadOnDemandService.startPreload(routePath);
  }

}
