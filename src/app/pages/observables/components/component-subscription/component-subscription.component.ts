import { Component, OnInit, OnDestroy } from '@angular/core';

import { take } from 'rxjs/operators';

import { ExampleService } from './../../../../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-subscription',
  templateUrl: './component-subscription.component.html',
  styleUrls: ['./component-subscription.component.scss']
})
export class ComponentSubscriptionComponent implements OnInit, OnDestroy {

  subscribe: Subscription;

  constructor(
    private exampleService: ExampleService
  ) { }

  ngOnInit(): void {

    // Cenário 1
    // this.exampleService.exemploRequest()
    // .pipe()
    // .subscribe((value) => console.log('To aqui', value));

    // Cenário 2
    // const teste = this.exampleService.exemploRequest();
    // teste.pipe().subscribe((value) => console.log('To aqui', value));

    // Cenário 3
    this.subscribe = this.exampleService.exemploRequest()
    .pipe()
    .subscribe((value) => console.log('To aqui', value));

    // Cenário 4
    // this.exampleService.exemploRequest()
    //   .pipe(take(1))
    //   .subscribe((value) => console.log('To aqui', value));
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
