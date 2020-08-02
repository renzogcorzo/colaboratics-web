import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1

      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('.05s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onActiveSlideChange(event) {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].open = (i == event);
    }

  }

  slides: any[] = [{
    image: '/assets/images/ergoset1.jpg',
    open: true,
    texts: [{
      value: 'Creamos',
      colorCls: 'cyan'
    }, {
      value: 'TUS proyectos',
      colorCls: 'black'
    }
    ]
  },
  {
    image: '/assets/images/ergoset2.jpg',
    open: false,
    texts: [{
      value: 'Aseguramos',
      colorCls: 'magenta'
    }, {
      value: 'tu transformación digital',
      colorCls: 'black'
    }
    ]
  },
  {
    image: 'assets/images/distancelearning.png',
    open: false,
    texts: [{
      value: 'Hacemos que suceda',
      colorCls: 'magenta'
    }
    ]
  }
  ];

}
