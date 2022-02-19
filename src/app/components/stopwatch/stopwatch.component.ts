import { Component, OnInit } from '@angular/core';

import { timer } from "rxjs";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  time = null;
  counter = 0;
  isRunning = false;
  disabledButton = false;

  constructor() { }

  ngOnInit(): void {
    timer(0, 10).subscribe(millis => {
      if (this.isRunning) {
        this.counter += 10;
        this.time = new Date(0, 0, 0, 0, 0, 0, 0);
        this.time.setMilliseconds(this.counter);
      }
    });
  }

  toggleTimer() {
    this.isRunning = !this.isRunning;
  }

}
