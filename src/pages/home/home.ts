import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  urlYoutube: SafeResourceUrl;
  urlVimeo: SafeResourceUrl;
  urlUstream: SafeResourceUrl;
  constructor(public navCtrl: NavController, sanitizer: DomSanitizer) {
    this.urlYoutube = sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/XHCVWWsQmUs');
    this.urlVimeo = sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/203956723');
    this.urlUstream = sanitizer.bypassSecurityTrustResourceUrl('http://www.ustream.tv/embed/3064708?html5ui'); 
  }

}
