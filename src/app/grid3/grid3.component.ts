import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./grid3.component.css']
})
export class Grid3Component {
  // Reçoit l'URL de l'image depuis AppComponent.
  @Input() url: string = '';
}
