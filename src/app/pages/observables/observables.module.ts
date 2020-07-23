import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentSubscriptionComponent } from './components';
import { ObservablesComponent } from './observables.component';

@NgModule({
    declarations: [ObservablesComponent, ComponentSubscriptionComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: ObservablesComponent}])
    ]
})
export class ObservablesModule {}
