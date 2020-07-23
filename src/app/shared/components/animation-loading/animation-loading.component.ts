import { Component, Input } from '@angular/core';

import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animation-loading',
  templateUrl: './animation-loading.component.html',
  styleUrls: ['./animation-loading.component.scss']
})
export class AnimationLoadingComponent {

  @Input() sizeHeight: number;
  @Input() sizeWidth: number;
  @Input() lottieConfig: AnimationOptions;

}
