import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

enum CardTypeEnum {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  AMERICAN_EXPRESS = 'amex',
  MAESTRO = 'maestro',
  UNKNOWN = 'unknown'
}
@Directive({
  selector: '[appCardType]',
  standalone:true
})

export class CardTypeDirective implements OnChanges {
  @HostBinding('attr.src') cardImage: string = '';
  @Input() cardNumber: string = '';
  ngOnChanges(){
    this.cardImage = 'assets/' + this.getCardTypeFromNumber() + '.png';
  }
  getCardTypeFromNumber(): CardTypeEnum {
  if (!this.cardNumber) {
    return CardTypeEnum.UNKNOWN;
  }
  const prefix = this.cardNumber.substring(0, 2);
  switch(prefix) {
    case '44':
      return CardTypeEnum.VISA;
    case '33':
      return CardTypeEnum.MASTERCARD;
    case '22':
      return CardTypeEnum.AMERICAN_EXPRESS;
    case '55':
      return CardTypeEnum.MAESTRO;
    default:
      return CardTypeEnum.UNKNOWN;
  }
}

}