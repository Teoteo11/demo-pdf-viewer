import { Component } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { delay, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-pdf-viewer';

}
