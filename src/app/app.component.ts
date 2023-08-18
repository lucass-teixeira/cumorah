import { Component, HostListener } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Capacitor } from '@capacitor/core';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  width: number = 0;
  @HostListener('window:resize', ['$event']) onWindowResize(){
    this.width = window.innerWidth;
    this.checkarWeb();
  }
  constructor() { 

    this.width = window.innerWidth;
    this.checkarWeb();
  }

  checkarWeb(){
    const html = document.querySelector('html');

    if(Capacitor.getPlatform() === 'web' && this.width > 768){
      html?.classList.add('center')
    }
    else{
      html?.classList.remove('center')
      
    }
  }
}
 