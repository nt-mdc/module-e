import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  images = new BehaviorSubject<
    { name: string; dataUrl: string; index: number }[]
  >([]);

  loadPhotos(files: FileList) {
    this.images.next([]);

    const newImages: { name: string; dataUrl: string; index: number }[] = [];

    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        let fileName: any = file.name
          .match(/^(.*)\.[^.]+$/)![1]
          .replace(/[-_]/g, ' ')
          .split(' ')
          .map(
            (word) => word[0].toUpperCase() + word.substring(1).toLowerCase()
          )
          .join(' ');

        newImages.push({
          name: fileName,
          dataUrl: reader.result as string,
          index: index + 1,
        });

        this.images.next([...newImages]);
      };
      reader.readAsDataURL(file);
    });
    
  }

  constructor() {
  }
}
