import { Component, OnInit } from '@angular/core';

import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lottieConfig: AnimationOptions = {
    path: 'assets/json/tea.json',
  };

  constructor() { }

  ngOnInit(): void {}

}
