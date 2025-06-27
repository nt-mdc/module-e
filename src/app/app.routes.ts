import { Routes } from '@angular/router';
import { UploadComponent } from './views/upload/upload.component';
import { SlideShowComponent } from './views/slide-show/slide-show.component';

export const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'slide-show', component: SlideShowComponent },
];
