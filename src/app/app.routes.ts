import { Routes } from "@angular/router";
import { CustomPdfViewerComponent } from "./components/custom-pdf-viewer/custom-pdf-viewer.component";

export const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'pdf-viewer', 
    pathMatch: 'full'
  },
  {
    path: 'pdf-viewer',
    component: CustomPdfViewerComponent
  }
]