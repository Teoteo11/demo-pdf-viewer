import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { delay, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  title = 'demo-pdf-viewer';

  openPdfViewer = (value: 1 | 2) => this.router.navigate([`pdf-viewer-${value === 1 ? 'one' : 'two'}`]); 
  

}
