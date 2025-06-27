import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent implements OnInit {
  images: string[] = [];

  constructor(private photoService: PhotosService, private router: Router) {}

  ngOnInit(): void {
    this.photoService.images.subscribe((images) => {
      if (images.length !== 0) {
        this.router.navigate(['slide-show']);
      }
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      this.photoService.loadPhotos(files);
    }
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.photoService.loadPhotos(target.files);
    }
  }

  // private loadFiles(files: FileList) {
  //   Array.from(files).forEach((file) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.images.push(reader.result as string);
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // }
}
