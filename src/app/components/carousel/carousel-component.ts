import { Component, OnInit, Input } from '@angular/core';
import { SlideInfo } from '../../models/slideInfo';
import { SlidersConstant } from '../../constants/SlidersContent';

@Component({
  selector: 'carousel-component',
  inputs: ['initPage'],
  templateUrl: './carousel-component.html',
  styleUrls: ['./carousel-component.css']
})

export class СarouselComponent implements OnInit {

  @Input() pageName: string;
  public slides: SlideInfo[];

  constructor(private sliders: SlidersConstant) { 
  }
  
  ngOnInit(): void {
    this.slides = this.sliders.getPageSlides(this.pageName);
  }
}