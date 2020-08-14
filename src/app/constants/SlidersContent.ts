import { Injectable } from '@angular/core';
import { SlideInfo } from '../models/slideInfo'

@Injectable({
    providedIn: 'root',
  })

  export class SlidersConstant {
    slides: SlideInfo[];

    getPageSlides(pageName:string) {

        if(pageName == "main"){

        this.slides = [
            { slideDescription: "Trade with us and become richer!", slideTitle: "Trade", photoPath:"../../../assets/1.jpg"  },
            { slideDescription: "Who does not take risks, he achieves nothing!", slideTitle: "Take the risk", photoPath:"../../../assets/2.jpg"  },
            { slideDescription: "The one who does nothing is wrong!", slideTitle: "Try", photoPath:"../../../assets/4.jpg"  }
          ];

          return this.slides;
        }

        return null;
     }
  }

