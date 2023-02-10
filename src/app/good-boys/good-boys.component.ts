import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-good-boys',
  templateUrl: './good-boys.component.html',
  styleUrls: ['./good-boys.component.css']
})
export class GoodBoysComponent {
  @Input() dogData: number | undefined;
  dog:string | undefined;;
  dog1:string;
  dog2:string;
  dog3:string;
  dog4:string;
  dog5:string;
  dog6:string;
  dog7:string;
  dog8:string;
  dog9:string;
  dog10:string;
  dog11:string;
  dog12:string;
  dog13:string;
  dog14:string;
  dog15:string;
  dog16:string;
  dog17:string;
  dog18:string;
  dog19:string;
  dog20:string;

  constructor() {
    this.dog1 = '../../assets/images/Labrador.jpg',
    this.dog2 = '../../assets/images/GermanShepherd.jpg',
    this.dog3 = '../../assets/images/GoldenRetriever.jpg',
    this.dog4 = '../../assets/images/FrenchBulldog.jpg',
    this.dog5 = '../../assets/images/Bulldog.jpg',
    this.dog6 = '../../assets/images/Poodle.jpg',
    this.dog7 = '../../assets/images/Beagle.jpg',
    this.dog8 = '../../assets/images/Rottweiler.jpg',
    this.dog9 = '../../assets/images/GermanShorthairedPointer.jpg',
    this.dog10 = '../../assets/images/Corgi.jpg',
    this.dog11 = '../../assets/images/Dachshund.jpg',
    this.dog12 = '../../assets/images/YorkshireTerrier.jpg',
    this.dog13 = '../../assets/images/AustralianShepherd.jpg',
    this.dog14 = '../../assets/images/Boxer.jpg',
    this.dog15 = '../../assets/images/Husky.jpg',
    this.dog16 = '../../assets/images/CavalierKingCharlesSpaniel.jpg',
    this.dog17 = '../../assets/images/GreatDane.jpg',
    this.dog18 = '../../assets/images/Schnauzer.jpg',
    this.dog19 = '../../assets/images/DobermanPinscher.jpg',
    this.dog20 = '../../assets/images/ShihTzu.jpg'
  }

  ngOnChanges() {
    if (this.dogData !== undefined) {
      this.parseData();
    } else {
      return console.log(this.dogData, 'nothing happened')
    }
}

  ngOnInit() {
    this.parseData();
  }

   parseData(){
    switch (this.dogData) {
      case 0:
        this.dog = this.dog1;
        break;
      case 1:
        this.dog = this.dog2;
        break;
      case 2:
        this.dog = this.dog3;
        break;
      case 3:
        this.dog = this.dog4;
        break;
      case 4:
        this.dog = this.dog5;
        break;
      case 5:
        this.dog = this.dog6;
        break;
      case 6:
        this.dog = this.dog7;
        break;
      case 7:
        this.dog = this.dog8;
        break;
      case 8:
        this.dog = this.dog9;
        break;
      case 9:
        this.dog = this.dog10;
        break;
      case 10:
        this.dog = this.dog11;
        break;
      case 11:
        this.dog = this.dog12;
        break;
      case 12:
        this.dog = this.dog13;
        break;
      case 13:
        this.dog = this.dog14;
        break;
      case 14:
        this.dog = this.dog15;
        break;
      case 15:
        this.dog = this.dog16;
        break;
      case 16:
        this.dog = this.dog17;
        break;
      case 17:
        this.dog = this.dog18;
        break;
      case 18:
        this.dog = this.dog19;
        break;
      case 19:
        this.dog = this.dog20;
        break;
      default:
        console.log(this.dog, "this dog is");
    }
   }
}
