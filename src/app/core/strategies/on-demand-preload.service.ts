import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class OnDemandPreloadOptions {
  constructor(public routePath: string, public preload = true) {}
}

@Injectable({ providedIn: 'root' })
export class OnDemandPreloadService {
  private subject = new Subject<OnDemandPreloadOptions>();
  state$ = this.subject.asObservable();

  public startPreload(routePath: string): void {
    const message = new OnDemandPreloadOptions(routePath, true);
    this.subject.next(message);
  }
}
