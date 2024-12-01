import {Component} from '@angular/core';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  standalone: true,
  styleUrls: ['./grid1.component.css']
})
export class Grid1Component {
  minutes: number = 0;
  seconds: number = 0;
  interval: any = null;
  enablePlay: boolean = true;
  enableStop: boolean = false;
  enableReset: boolean = false;

  start(): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }
      }, 1000);

      this.enablePlay = false;
      this.enableStop = true;
      this.enableReset = false;
    }
  }

  stop(): void {
    clearInterval(this.interval);
    this.interval = null;

    this.enablePlay = true;
    this.enableStop = false;
    this.enableReset = true;
  }

  reset(): void {
    clearInterval(this.interval);
    this.interval = null;
    this.minutes = 0;
    this.seconds = 0;

    this.enablePlay = true;
    this.enableStop = false;
    this.enableReset = false;
  }
}
