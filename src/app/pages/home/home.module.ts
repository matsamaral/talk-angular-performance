import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimationLoadingModule } from './../../shared';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        AnimationLoadingModule,
        RouterModule.forChild([{path: '', component: HomeComponent}])
    ]
})
export class HomeModule {}
