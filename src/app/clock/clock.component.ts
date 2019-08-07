import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject, fromEvent, BehaviorSubject, timer, NEVER, interval } from 'rxjs';
import { takeUntil, switchMap, map, merge,take, tap, filter, takeWhile, mapTo, scan } from 'rxjs/operators';
import { CountDownService } from '../services/count-down.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public pause = false;
  constructor(
    private $countDown: CountDownService
  ) { }

  public currTime$ = this.$countDown.timer$.pipe();

  public togglePlay(){
    this.pause === true ? this.pause = false : this.pause = true;
    console.log('pause====', this.pause);
    this.$countDown.currTime$.next(this.pause);
  }

  ngOnInit() {
  }

}
