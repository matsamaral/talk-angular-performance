import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  lottieConfig: AnimationOptions = {
    path: 'assets/json/rocket.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
