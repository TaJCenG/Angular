import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Accountsservice } from '../accountsservice';

@Component({
  selector: 'app-accountupdate',
  standalone:true,
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent  {
  @Input() account: any="";
  @Input() id: number=0;
  constructor(private accountsService: Accountsservice) { }
  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    console.log('Account status changed, new status: ' + status);
  }
}
