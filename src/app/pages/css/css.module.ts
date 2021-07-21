import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimationLoadingModule } from './../../shared';
import { CssComponent } from './css.component';

@NgModule({
    declarations: [
        CssComponent
    ],
    imports: [
        CommonModule,
        AnimationLoadingModule,
        RouterModule.forChild([{path: '', component: CssComponent}])
    ]
})
export class CssModule {}
