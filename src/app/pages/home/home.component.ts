import { isPlatformBrowser } from '@angular/common';
import Splide from '@splidejs/splide';
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {

      new Splide('#just-opened-carousel', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pauseOnHover: true,
      }).mount();
    }
  }
}
