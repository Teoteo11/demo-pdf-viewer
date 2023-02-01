import { Component } from '@angular/core';
import { of, delay, map } from 'rxjs';

@Component({
  selector: 'app-custom-pdf-viewer',
  templateUrl: './custom-pdf-viewer.component.html',
  styleUrls: ['./custom-pdf-viewer.component.scss']
})
export class CustomPdfViewerComponent {

  pdfSrc: string = '';

  onFileSelected = () => {
    let $img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      
      reader.onload = (e: any) => {
        of(e).pipe(
          delay(1000),
          map( e => e.target.result)
        ).subscribe( value => {
          this.pdfSrc = value;
        })
        
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}
