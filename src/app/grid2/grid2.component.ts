import {Component, EventEmitter, Output} from '@angular/core';
import {ImageLibrary} from "../imageLibrary";
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

  currentImageUrl: string = '';
  currentScaleFactor: number = 300;
  imageUrls: string[] = [];

  constructor(protected imageLibrary: ImageLibrary) {
    this.updateImage();
    this.imageUrls = this.imageLibrary.getUrls();
  }

  // Méthodes pour naviguer dans les images.
  nextImage() {
    this.imageLibrary.moveToNextImage();
    this.updateImage();
  }

  previousImage() {
    this.imageLibrary.moveToPrevImage();
    this.updateImage();
  }

  // Aller à la première ou à la dernière image.
  firstImage() {
    this.imageLibrary.setCurrentIndex(0);
    this.updateImage();
  }

  lastImage() {
    this.imageLibrary.setCurrentIndex(this.imageLibrary.getSize() - 1);
    this.updateImage();
  }

  // Ajuster le facteur d'échelle.
  adjustScale(event: any) {
    const newScale = parseInt(event.target.value, 10);
    this.imageLibrary.setCurrentScaleFactor(newScale);
    this.currentScaleFactor = newScale;
  }

  // Méthodes pour naviguer dans les images en sélectionnant.
  selectImage(index: number) {
    this.imageLibrary.setCurrentIndex(index);
    this.updateImage();
  }

  // Vérifie si une vignette correspond à l'image courante.
  isSelected(index: number): boolean {
    return this.imageLibrary.getCurrentIndex() === index;
  }

  // Met à jour l'image courante et son facteur d'échelle.
  private updateImage() {
    this.currentImageUrl = this.imageLibrary.getCurrentImageUrl();
    this.currentScaleFactor = this.imageLibrary.getCurrentImageScaleFactor();
    this.urlChange.emit(this.currentImageUrl);
  }
}
