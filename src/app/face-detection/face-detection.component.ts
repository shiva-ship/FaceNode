import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil   } from 'ngx-webcam';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.css']
})
export class FaceDetectionComponent {
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';
  ngOnInit() {}
  public getSnapshot(): void {
    this.trigger.next(void 0);
  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }
  // @ViewChild('video') videoElement!: ElementRef;
  // video!: HTMLVideoElement;

  // constructor() { }

  // ngOnInit() {
  //   console.log("ng init")
  //   if (this.videoElement) {
  //     this.video = this.videoElement.nativeElement;
  //     this.startVideo();
  //   }
  //   }
  // startVideo() {
  //   if (navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices.getUserMedia({ video: true })
  //       .then(stream => {
  //         this.video.srcObject = stream;
  //       })
  //       .catch(error => {
  //         console.error('Error accessing webcam:', error);
  //       });
  //   }
  // }
 
  // detectFaces(){
  //   console.log("hello")
  // }
}
