import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageLibrary} from "../services/imageLibrary";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-grid2',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './grid2.component.html',
  styleUrl: './grid2.component.css'
})
export class Grid2Component {
  // Émetteur d'événement pour transmettre l'URL.
  @Output() urlChange = new EventEmitter<string>();
  @Input() size!: number;

  currentImageUrl: string = '';
  imageUrls: string[] = [];

  constructor(protected imageLibrary: ImageLibrary) {
    this.imageUrls = this.imageLibrary.getUrls();

    this.imageLibrary.currentImageObserver.subscribe(() => {
      this.currentImageUrl = this.imageLibrary.getCurrentImageUrl();
      this.urlChange.emit(this.currentImageUrl);
    });
  }

  // Méthodes pour naviguer dans les images.
  nextImage() {
    this.imageLibrary.moveToNextImage();
  }

  previousImage() {
    this.imageLibrary.moveToPrevImage();
  }

  // Aller à la première ou à la dernière image.
  firstImage() {
    this.imageLibrary.setCurrentIndex(0);
  }

  lastImage() {
    this.imageLibrary.setCurrentIndex(this.imageLibrary.getSize() - 1);
  }

  // Méthodes pour naviguer dans les images en sélectionnant.
  selectImage(index: number) {
    this.imageLibrary.setCurrentIndex(index);
  }

  // Vérifie si une vignette correspond à l'image courante.
  isSelected(index: number): boolean {
    return this.imageLibrary.getCurrentIndex() === index;
  }
}
