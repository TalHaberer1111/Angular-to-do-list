import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import { KegComponent } from './keg.component';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="ABV" class="col-sm-8 input-lg" #newABV>
    <input placeholder="IBU" class="col-sm-8 input-lg" #newIBU>
    <button (click)="addKeg(newName, newDescription, newABV, newIBU)">Add</button>
  </div>
  `

})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  public newKeg: Keg;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();

  }
  addKeg(userName: HTMLInputElement,
         userDescription: HTMLInputElement,
         userABV: HTMLInputElement,
         userIBU: HTMLInputElement){
    // new Keg(userName.value,userDescription.value, parseInt(userABV.value), parseInt(userIBU.value), 124);

    this.newKeg.name = userName.value;
    this.newKeg.description = userDescription.value;
    this.newKeg.abv = parseInt(userABV.value);
    this.newKeg.ibu = parseInt(userIBU.value);
    this.newKeg.volume = 124;


    this.onSubmitNewKeg.emit(this.newKeg);
    userName.value = "";
    userDescription.value = "";
    userABV.value = "";
    userIBU.value = "";
  }
}
