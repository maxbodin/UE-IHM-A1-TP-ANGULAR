import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs';

type imageItem = {
  url: string;
  size: number;
};

@Injectable({
  providedIn: 'root'
})

export class ImageLibrary {

  library: Array<imageItem>; // bibliotheque d image
  private images: string[] = ["un.png", "geste.png", "pour.png",
    "la.png", "pla.png", "ne.png", "te.png"];
  //private currentindex: number; // index de l image courante
  private currentIndexObserver = new BehaviorSubject<number>(0);
  public currentImageObserver = this.currentIndexObserver.asObservable();

  public constructor() {
    this.library = new Array<imageItem>();
    for (let i = 0; i < this.images.length; i++)
      this.library.push({url: "../assets/images/" + this.images[i], size: 300});

  }

  getSize() {
    return this.library.length;
  }

  public getCurrentIndex(): number {
    return this.currentIndexObserver.getValue();
  }

  public moveToNextImage(): number {
    this.setCurrentIndex(this.currentIndexObserver.getValue() + 1);
    return this.currentIndexObserver.getValue();
  }

  public moveToPrevImage(): number {
    this.setCurrentIndex(this.currentIndexObserver.getValue() - 1);
    return this.currentIndexObserver.getValue();
  }

  public getCurrentImageUrl(): string {
    return this.library[this.currentIndexObserver.getValue()].url;
  }

  public getCurrentImageScaleFactor(): number {
    return this.library[this.currentIndexObserver.getValue()].size;
  }

  public setCurrentIndex(cindex: number) {
    if ((cindex < this.library.length) && (cindex >= 0)) {
      this.currentIndexObserver.next(cindex);
    }
  }

  public setCurrentScaleFactor(factor: number) {
    this.library[this.currentIndexObserver.getValue()].size = factor;
  }

  public getUrls(): string[] {
    return this.library.map((x) => x.url);
  }
}
