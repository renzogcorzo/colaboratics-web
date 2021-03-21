import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-hpfs-colaboratics',
  templateUrl: './hpfs-colaboratics.component.html',
  styleUrls: ['./hpfs-colaboratics.component.less']
})
export class HpfsColaboraticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onWindowScroll(event) {
    console.log(event);
  }


}
