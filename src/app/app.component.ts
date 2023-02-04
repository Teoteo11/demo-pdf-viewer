import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { PDFProgressData, PdfViewerModule } from 'ng2-pdf-viewer';
import { delay, map, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  title = 'demo-pdf-viewer';

  openPdfViewer = (value: 1 | 2) => this.router.navigate([`pdf-viewer-${value === 1 ? 'one' : 'two'}`]); 
  

}
