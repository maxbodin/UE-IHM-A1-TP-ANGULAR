import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Grid1Component} from "./grid1/grid1.component";
import {Grid2Component} from "./grid2/grid2.component";
import {Grid3Component} from "./grid3/grid3.component";
import {Grid5Component} from './grid5/grid5.component';
import {ImageLibrary} from './imageLibrary';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Grid1Component, Grid2Component, Grid3Component, Grid5Component],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';

  // URL de l'image actuelle.
  currentImageUrl: string = '';
  currentSize: number = 300;

  constructor(protected imageLibrary: ImageLibrary) {}

  // Gestionnaire appelé lorsque Grid2 émet un événement.
  onUrlChange(url: string) {
    this.currentImageUrl = url;
  }
}
