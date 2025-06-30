import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { PhotoComponent } from '../../cards/photo/photo.component';
import { PhotosService } from '../../services/photos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-show',
  imports: [PhotoComponent, CommonModule],
  templateUrl: './slide-show.component.html',
  styleUrls: [
    './slide-show.component.css',
    './../../../themes-css/theme-a.component.scss',
    './../../../themes-css/theme-c.component.scss',
  ],
})
export class SlideShowComponent implements OnInit {
  @ViewChild('slideShow', { static: true }) slideShow!: ElementRef;
  imgs: any[] = [];
  themeClass: string = '';
  currentSlide = 0;

  constructor(public photoService: PhotosService) {
    photoService.images.subscribe((images) => {
      this.imgs = images.sort((a, b) => a.index - b.index);
    });
  }

  ngOnInit() {
    this.photoService.theme.subscribe((theme) => {
      this.themeClass = theme;
    })

    setInterval(() => {this.nextSlide()}, 5000)
  }

  nextSlide() {
    if ((this.currentSlide + 1) < this.imgs.length) {
      ++this.currentSlide;
    } else {
      this.currentSlide = 0;
    }
    console.log(this.currentSlide);
  }
}
