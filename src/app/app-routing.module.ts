import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPdfViewerComponent } from './components/custom-pdf-viewer/custom-pdf-viewer.component';

const routes: Routes = [
  { path: 'pdf-viewer-one', component: CustomPdfViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
