import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "tapped",
  pure: false
})

export class TappedPipe implements PipeTransform {
  transform(input: Keg[], args) {
    console.log('selected keg: ', args[1]);
    var desiredTappedState = args[0];
    if(desiredTappedState === "tapped") {
      return input.filter((keg) => {
        return keg.tapped;
      });
    } else if (desiredTappedState === "notTapped") {
      return input.filter(function(keg) {
        return !keg.tapped;
      });
    } else {
      return input;
    }
  }
}
