import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LottieModule } from 'ngx-lottie';

import { AnimationLoadingComponent } from './animation-loading.component';

export function playerFactory(): Promise<any> {
    return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
    declarations: [
        AnimationLoadingComponent
    ],
    imports: [
        CommonModule,
        LottieModule.forRoot({ player: playerFactory, useCache: true }),
    ],
    exports: [
        AnimationLoadingComponent
    ]
})
export class AnimationLoadingModule {}
