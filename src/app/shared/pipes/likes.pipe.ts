

import {PipeTransform, Pipe} from "@angular/core";
@Pipe({
  name: 'likes',
  pure: true
})
export class LikesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let text;
    let fmt = args[0];

    switch(value) {
      case (value = 1):
        text = "Silver";
        break;
      case (value = 2):
        text = "Gold";
        break;
      default:
        text = "Bronze";
    }

   // if (fmt == 'short') return text;
    return text;


  }

}
