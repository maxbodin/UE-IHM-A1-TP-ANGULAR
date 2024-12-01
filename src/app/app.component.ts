import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Grid1Component } from "./grid1/grid1.component";
import { Grid2Component } from "./grid2/grid2.component";
import { Grid3Component } from "./grid3/grid3.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Grid1Component, Grid2Component, Grid3Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
