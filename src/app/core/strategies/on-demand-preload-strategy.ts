import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import { OnDemandPreloadService, OnDemandPreloadOptions } from './on-demand-preload.service';

export declare var navigator;

@Injectable({ providedIn: 'root', deps: [OnDemandPreloadService] })
export class OnDemandPreloadStrategy implements PreloadingStrategy {
  private preloadOnDemand$: Observable<OnDemandPreloadOptions>;

  constructor(private preloadOnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.state$;
  }

  public preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route && route.data && route.data.preload) {
      return load();
    } else {
      return this.preloadOnDemand$.pipe(
        mergeMap(preloadOptions => {
          const shouldPreload = this.preloadCheck(route, preloadOptions);
          return shouldPreload && this.hasGoodConnection() ? load() : EMPTY;
        })
      );
    }
  }

  private preloadCheck(route: Route, preloadOptions: OnDemandPreloadOptions): boolean {
    return (
      [route.path, '*'].includes(preloadOptions.routePath) && preloadOptions.preload
    );
  }

  hasGoodConnection(): boolean {
    const conn = navigator.connection;
    if (conn) {
      if (conn.saveData) {
        return false;
      }
      const avoidTheseConnections = ['slow-2g', '2g', '3g' /* ,  '4g' */];
      const effectiveType = conn.effectiveType || '';
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }

}
