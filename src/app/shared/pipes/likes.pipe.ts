

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
      case (value = 0):
        text = "Bronze";
        break;
      case (value = 1):
        text = "Silver";
        break;
      default:
        text = "Gold";
    }

   // if (fmt == 'short') return text;
    return text;


  }

}
