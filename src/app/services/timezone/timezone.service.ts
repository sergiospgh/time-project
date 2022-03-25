import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private apiUrl = 'http://worldtimeapi.org/api/timezone/';
  private tmzs: Map<string, Observable<object>> = new Map<string, Observable<object>>();

  constructor(
    protected http: HttpClient
  ) { }

  getTime(area: string, location: string): any {
    const url = this.apiUrl + (area ? (area + '/') : '') + (location || '');

    // Map for preventing calling multiple times the same url
    if (!this.tmzs.has(url)) {
      this.tmzs.set(
        url,
        this.http.get(url).pipe(
          map((response: Response) => {
            return response;
          }),
          shareReplay(1)
        )
      );
    }
    return this.tmzs.get(url);
  }
}
