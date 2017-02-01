

import {PipeTransform, Pipe} from "@angular/core";
@Pipe({
  name: 'status',
  pure: true
})
export class StatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let long, short;
    let fmt = args[0];

    switch(value) {
      case "A":
        long = "Senator";
        short = "SEN";
        break;
      case "B":
        long = "Frequent Travelor";
        short = "FTL";
        break;
      default:
        long = "Passenger";
        short = "-";
    }

    if (fmt == 'short') return short;
    return long;


  }

}
