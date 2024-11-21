import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Test2Response } from 'src/app/test2/test2.interface';

@Injectable()
export class Test2Service {
  public loading$ = new BehaviorSubject<boolean>(true);
  private _endpoint = 'https://600fe4d46c21e1001704f951.mockapi.io/Search';

  constructor(private _httpClient: HttpClient) {
    this.loading$.next(false);
  }

  public async test2Request(
    value: string
  ): Promise<HttpResponse<Test2Response[]> | HttpErrorResponse> {
    try {
      this.loading$.next(true);
      const response = await this._httpClient
        .get<Test2Response[]>(`${this._endpoint}?name=${value}`, {
          headers: { Accept: 'application/json' },
          observe: 'response',
        })
        .toPromise();
      return response;
    } catch (error) {
      return error as HttpErrorResponse;
    } finally {
      this.loading$.next(false);
    }
  }

  public getLoading(): Observable<boolean> {
    return this.loading$;
  }
}
