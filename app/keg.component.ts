import { Component } from 'angular2/core';
import { Keg } from './keg.model';


  @Component({
      selector: 'keg-display',
      inputs: ['keg'],
    template: `
    <div>
      <input *ngIf="keg.tapped" type="checkbox" checked (click)="toggleTapped(false)"/>
      <input *ngIf="!keg.tapped" type="checkbox" (click)="toggleTapped(true)"/>
      <label>{{ keg.kegId }}</label>
      <label>{{ keg.name }}</label>
      <label>{{ keg.description }}</label>
      <label>{{ keg.abv }}</label>
      <label>{{ keg.ibu }}</label>
      <label>{{ keg.volume }}</label>
    </div>
    `
  })
  export class KegComponent {
    public keg: Keg;
    toggleDone(setState: boolean){
      this.keg.tapped = setState;
    }
  }
