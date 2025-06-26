import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  images = new BehaviorSubject<{ name: string; dataUrl: string }[]>([]);

  loadPhotos(files: FileList) {

    const newImages: { name: string; dataUrl: string }[] = [];

    Array.from(files).forEach((file) => {
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
        });

        this.images.next([...this.images.value, ...newImages])
      };
      reader.readAsDataURL(file);
    });
  }

  constructor() {}
}
