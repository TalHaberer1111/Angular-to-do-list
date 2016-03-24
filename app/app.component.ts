import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent} from './keg-list.component';
import { Keg } from './keg.model';

// parent component
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
    <div class ="header">
      <h1>Rob and Tal's Taproom</h1>
      </div>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];  // Keg[] (or Array<Keg>) identifies kegs as an array of Keg objects
  constructor(){
    this.kegs = [
      new Keg(0, "Dark Vador", "Porter", 5, 40, 124, 5),
      new Keg(1, "IB Waun", "IPA", 9, 60, 124, 5),
      new Keg(2, "Han Solo", "Amber Ale", 8, 30, 124, 7),
      new Keg(3, "Princes Lager", "Lager", 10, 45, 124, 7),
      new Keg(4, "Death Stout", "Irish Stout", 8,30, 124, 9),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void{
  }
}
