import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)
export class ExampleService {

    private contador: number = 0;
    private subject$: Subject<number>;

    constructor() {
        this.subject$ = new Subject();
    }

    public emitValue(): void {
        this.subject$.next(this.contador++);
    }

    public exemploRequest(): Observable<number> {
        return this.subject$.asObservable();
    }
}
