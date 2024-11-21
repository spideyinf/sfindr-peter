import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, repeatWhen } from 'rxjs/operators';
import { Row } from './row.interface';
import { source } from './source';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss'],
})
export class Test3Component implements OnInit {
  rows$?: Observable<Row[]>;
  private initialized = false;

  constructor() {}

  ngOnInit() {
    if (!this.initialized) {
      this.rows$ = source.pipe(repeatWhen((x) => x.pipe(delay(5000))));
      this.initialized = true;
    }
  }
}
