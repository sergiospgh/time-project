import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(
    protected http: HttpClient
  ) { }

  getTime(area: string, location: string): any {
    const url = 'http://worldtimeapi.org/api/timezone/' + (area ? (area + '/') : '') + (location || '');
    return this.http.get(url);
  }
}
