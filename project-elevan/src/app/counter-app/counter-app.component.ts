import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent implements OnInit {
  totalCount: number = 10;
  hitIncrementValue: number = 0;
  hit: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(value: number) {
    this.hit += 1;
    // this.totalCount += this.totalCount;
    this.hitIncrementValue += this.totalCount;
  }
}
