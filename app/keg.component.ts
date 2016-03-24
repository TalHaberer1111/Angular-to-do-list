import { Component } from 'angular2/core';
import { Keg } from './keg.model';


  @Component({
      selector: 'keg-display',
      inputs: ['keg'],
      template: `
      <div class="kegInfo">
        <input *ngIf="keg.tapped" type="checkbox" checked (click)="toggleTapped(false)"/>
        <input *ngIf="!keg.tapped" type="checkbox" (click)="toggleTapped(true)"/>
        <label>{{ keg.name }}</label>
        <label> Total Pints Remaining: {{ keg.volume }}</label>
        <label> Price: {{ keg.price}}</label>
        <button class="btn btn-success" (click)="purchased(keg.volume)">Purchase</button>
      </div>
      `
  })
  export class KegComponent {
    public keg: Keg;
    toggleTapped(setState: boolean){
      this.keg.tapped = setState;
    }
    purchased(setState: number){
      this.keg.volume = setState -1;      
    }
  }
