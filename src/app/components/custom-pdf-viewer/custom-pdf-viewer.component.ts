import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { of, delay, map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-custom-pdf-viewer',
  imports: [PdfViewerModule],
  templateUrl: './custom-pdf-viewer.component.html',
  styleUrls: ['./custom-pdf-viewer.component.scss'],
  exportAs: 'app-custom-pdf-viewer'
})
export class CustomPdfViewerComponent {

  pdfSrc: string = '';

  onFileSelected = () => {
    let $img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        of(e).pipe(
          delay(1000),
          map( e => e.target.result)
        ).subscribe( value => this.pdfSrc = value)
      };
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}
