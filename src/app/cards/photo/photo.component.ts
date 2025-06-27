import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
  @Input() name: string = "Default";
  @Input() base64: string = "Default Base 64"
}
