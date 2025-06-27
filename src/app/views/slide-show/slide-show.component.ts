import { Component } from '@angular/core';
import { PhotoComponent } from '../../cards/photo/photo.component';
import { PhotosService } from '../../services/photos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-show',
  imports: [PhotoComponent, CommonModule],
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.css',
})
export class SlideShowComponent {
  imgs: any[] = [];
  constructor(public photoService: PhotosService) {
    photoService.images.subscribe((images) => {
      this.imgs = images.sort((a,b) => a.index - b.index);      
    });
  }
}
