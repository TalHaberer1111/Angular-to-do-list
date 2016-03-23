
// model
export class Keg {
  public tapped: boolean = false;
  constructor(public kegId: number,
              public name: string,
              public description: string,
              public abv: number,
              public ibu: number,
              public volume: number) {

  }
}
