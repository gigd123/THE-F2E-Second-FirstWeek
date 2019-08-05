import { Component, OnInit } from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import { takeUntil, switchMap, map, take, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
