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
  slides: any[];
  previews: any[];

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
    this.slides = this.getSlides();
    this.previews = this.getPreviews();
  }

  onActiveSlideChange(event) {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].open = (i == event);
    }

  }

  getSlides() {
    return [{
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

  getPreviews() {
    return [{
      header: 'Red rápida y segura',
      body: 'Fácil de gestionar que mejora la calidad de la las videollamadas y video, priorizando y controlando las mismas indispensables en el trabajo desde casa.',
      iconCls: 'fa fa-check'
    },{
      header: 'Proyección inalámbrica',
      body: 'trasmite video, audio y tactil desde tu computador hacia la pantalla de forma inalámbrica, sin cables y botones evitando el contacto con los mismos.',
      iconCls: 'fa fa-wifi'
    },{
      header: 'Videoconferencia interactiva',
      body: 'Cámaras web y soluciones de videoconferencia para tener la mejor reunión con calidad de video y audio desde casa.',
      iconCls: 'fa fa-tv'
    },{
      header: 'Cómputo y perifericos',
      body: 'Los mejores equipos de cómputo y dispositivos que mejorarán la experiencia de trabajar desde casa, con la mejor calidad del mercado.',
      iconCls: 'fa fa-laptop'
    }]
  }

}
