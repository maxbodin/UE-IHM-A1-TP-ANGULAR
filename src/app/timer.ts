export class Timer {

  private _totalSecondes: number = 0;
  private _timer;

  constructor() {
    this._timer = setInterval((): void => {
    }, 1000);

  }

  private _minutes: number = 0;

  get minutes(): number {
    return this._minutes;
  }

  private _secondes: number = 0;

  get secondes(): number {
    return this._secondes;
  }

  start() {
    this._timer = setInterval((): void => {
      this._minutes = Math.floor(++this._totalSecondes / 60);
      this._secondes = this._totalSecondes - this._minutes * 60;
    }, 1000);
  }

  stop() {
    clearInterval(this._timer);
  }

  reset() {
    this._totalSecondes = this._minutes = this._secondes = 0;
  }

}
