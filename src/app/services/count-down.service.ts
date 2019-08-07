import { Injectable } from '@angular/core';
import { Observable, Subject, fromEvent, timer, interval, BehaviorSubject } from 'rxjs';
import { takeUntil, switchMap, map, merge, take, tap, filter, takeWhile, mapTo, scan, mergeMap, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {
  // public currTime$ = new Subject();
  public currTime$ = new BehaviorSubject({
    pause: false
  });
  private totallTime = 10;
  private count$ = interval(1000);

  public timer$ = this.currTime$.asObservable().pipe(
    tap(console.log),
    // filter(x => x === true),
    merge(this.count$),
    mapTo(-1),
    scan((acc, curr) => curr ? curr + acc : acc , this.totallTime),
    map( x => this.getTime(x)),
    // filter(x => x.time !== 0 ),
    tap(x => console.log('x===' , x))
  );

  constructor() { }

  private getTime(time) {
    const min = Math.floor(time / 60);
    const second = time % 60;
    const totallTime = time;
    return { min, second, time};
  }
}
