import { Component, OnDestroy, OnInit } from '@angular/core';

import { TimezoneService } from '@services/index.service'

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss']
})
export class TimezoneComponent implements OnInit, OnDestroy {
  time = new Date();
  timeOffset = '';
  intervalId;

  areasOptions: any;
  locationsOptions: any;
  selectedArea = null;
  selectedLocation = null;

  foundTime = null;

  constructor(
    protected timezoneService: TimezoneService
  ) { }

  ngOnInit(): void {
    // Timer to show and update the local hour
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // local time offset
    const difHours = (this.time.getTimezoneOffset() / -60);
    this.timeOffset = (difHours > 0 ? '+' : '') + difHours.toString().padStart(2, '0') + ':00';

    // Area options hardcoded because the api does not provide those
    this.areasOptions = [
      { label: 'Africa', value: 'Africa' },
      { label: 'America', value: 'America' },
      { label: 'Antarctica', value: 'Antarctica' },
      { label: 'Asia', value: 'Asia' },
      { label: 'Atlantic', value: 'Atlantic' },
      { label: 'Australia', value: 'Australia' },
      { label: 'Europe', value: 'Europe' },
      { label: 'Indian', value: 'Indian' },
      { label: 'Pacific', value: 'Pacific' },
    ]
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  // Method to get locations from the API (calling service) with a given area
  getLocations(): void {
    // Resetting previous selection and options
    this.locationsOptions = [];
    this.foundTime = null;

    // Calling the service just with the selected to get the possible locations
    this.timezoneService.getTime(this.selectedArea, null).subscribe(locations => {
      // Extracting the last word form the possible locations given by the API, for example: 'Europe/Madrid'
      this.locationsOptions = locations.map(location => location.split('/').pop());
      // And introducing those into the possible locations selector with label and value format
      this.locationsOptions = this.locationsOptions.map(loc => ({ label: loc, value: loc }));
    });
  }

  // Method to get the time from a given area and location
  getTime(): any {
    this.timezoneService.getTime(this.selectedArea, this.selectedLocation).subscribe(time => {
      this.foundTime = time;
    }, (error) => { // Controlling mainly the 404 error
      this.foundTime = 'error';
    }
    );
  }
}
