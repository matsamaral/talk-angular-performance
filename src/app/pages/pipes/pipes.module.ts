import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PipesComponent } from './pipes.component';
import { StatusModule } from './../../shared';

@NgModule({
    declarations: [PipesComponent],
    imports: [
        CommonModule,
        StatusModule,
        RouterModule.forChild([{path: '', component: PipesComponent}])
    ]
})
export class PipesModule {}
