import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Test2Response } from 'src/app/test2/test2.interface';
import { Test2Service } from 'src/app/test2/test2.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  providers: [Test2Service],
})
export class Test2Component implements OnInit {
  public searchInput = new Subject<string>();
  public loading$: Observable<boolean> = new Observable();
  public output: Test2Response[] | string = '';

  constructor(private _test2Service: Test2Service) {
    this.searchInput
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((value) => value && this._test2Service.test2Request(value))
      )
      .subscribe((res) => {
        if (res instanceof HttpResponse) {
          this.output = JSON.stringify(res.body, null, 2);
        } else {
          this.output = 'Not found';
          console.error('Error response:', res);
        }
      });
  }

  ngOnInit() {
    this.loading$ = this._test2Service.getLoading();
  }

  ngOnDestroy() {
    this.searchInput.complete();
  }

  public onSearchInputChange(text: string) {
    this.searchInput.next(text);
  }
}
