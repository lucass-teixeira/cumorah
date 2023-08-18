import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Capacitor } from '@capacitor/core';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { 


    if(Capacitor.getPlatform() === 'web'){
      const html = document.querySelector('html');
      html?.classList.add('center')
    }
  }
}
 