import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {delay, repeatWhen, tap} from 'rxjs/operators';
import {Row} from './row.interface';
import {source} from "./source";

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit {
  rows$?: Observable<Row[]>;

  constructor() {
  }

  ngOnInit() {
    this.rows$ = source
      .pipe(
        repeatWhen(x => x.pipe(delay(5000))),
      );
  }
}
