import { Component, OnInit } from '@angular/core';
import { image } from './image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images: image[] = [
    {id:'1',
     title: 'Banner 1',
     description: 'Fondo',
     image: 'assets/images/banner-1.jpg'
    },
    {id:'2',
     title: 'Banner 2',
     description: 'Fondo 2',
     image: 'assets/images/banner-2.jpg'
    },
    {id:'3',
     title: 'Banner 3',
     description: 'Fondo 3',
     image: 'assets/images/banner-3.jpg'
    }
  ];

  ngOnInit(): void {
  }

}
