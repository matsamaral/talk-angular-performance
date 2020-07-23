import { Component, OnInit } from '@angular/core';

import { ExampleService } from './../../shared';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  showItem: boolean = true;

  constructor(
    private exampleService: ExampleService
  ) { }

  ngOnInit(): void {
  }

  public emitirValor(): void {
    this.exampleService.emitValue();
  }

}
