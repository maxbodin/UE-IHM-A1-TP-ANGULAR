import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-grid5',
  imports: [],
  templateUrl: './grid5.component.html',
  standalone: true,
  styleUrl: './grid5.component.css'
})
export class Grid5Component {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  // Ajuster le facteur d'échelle.
  adjustScale(event: any) {
    this.sizeChange.emit(parseInt(event.target.value, 10))
  }
}
