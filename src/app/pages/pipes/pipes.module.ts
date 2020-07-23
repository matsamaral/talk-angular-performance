import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesComponent } from './pipes.component';
import { StatusModule } from './../../shared';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PipesComponent],
    imports: [
        CommonModule,
        StatusModule,
        RouterModule.forChild([{path: '', component: PipesComponent}])
    ]
})
export class PipesModule {}
