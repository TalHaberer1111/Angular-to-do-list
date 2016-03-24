import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {TappedPipe} from './tapped.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [TappedPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="tapped">Show Tapped</option>
    <option value="notTapped" selected="selected">Show Not Tapped</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | tapped:filterTapped"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public onPurchaseSelect: EventEmitter<Number>;
  public selectedKeg: Keg;
  public filterTapped: string = "notTapped";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    this.kegList.push(
      new Keg(this.kegList.length, newKeg.name, newKeg.description, newKeg.abv, newKeg.ibu, newKeg.volume, newKeg.price)
    );
  }
  onChange(filterOption) {
    this.filterTapped = filterOption;
  }
}
