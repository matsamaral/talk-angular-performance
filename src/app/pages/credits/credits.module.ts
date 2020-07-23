import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimationLoadingModule } from './../../shared';
import { CreditsComponent } from './credits.component';

@NgModule({
    declarations: [
        CreditsComponent
    ],
    imports: [
        CommonModule,
        AnimationLoadingModule,
        RouterModule.forChild([{path: '', component: CreditsComponent}])
    ]
})
export class CreditsModule {}
