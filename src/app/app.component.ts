
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil   } from 'ngx-webcam';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoSrc: string | null = null;
  videoHeight = 480;
  videoWidth = 640;

  captureImage(webcamImage: WebcamImage): void {
    // Display the captured image in the video element
    this.videoSrc = webcamImage.imageAsDataUrl;
  }
}
