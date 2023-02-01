import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPdfViewerComponent } from './components/custom-pdf-viewer/custom-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPdfViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
