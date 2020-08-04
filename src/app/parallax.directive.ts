
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  @Input('offset') offset : number = 0

  constructor(private eleRef : ElementRef) {
    this.offset =  this.offset | this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    this.eleRef.nativeElement.style.top = (this.offset - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}