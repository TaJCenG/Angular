import { Component, OnInit } from '@angular/core';
import { AccountcreateComponent } from '../accountcreate/accountcreate.component';
import { AccountupdateComponent } from '../accountupdate/accountupdate.component';
import { CommonModule } from '@angular/common';
import { Accountsservice } from '../accountsservice';

@Component({
  selector: 'app-accountlist',
  imports:[AccountcreateComponent,AccountupdateComponent,CommonModule],
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css'],
  standalone:true
})
export class AccountlistComponent implements OnInit {

  constructor(private accService: Accountsservice) {}
  accounts :any[] = [];
 /* accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }];
  onAccountAdded(newAccount: {name: string, status: string}) {
    console.log('Emitted the Account Create Event to List Component');
    this.accounts.push(newAccount);}
  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    console.log('Emitted the Status ChangeEvent to List Component');
    this.accounts[updateInfo.id].status = updateInfo.newStatus;}*/
  ngOnInit(): void {
    this.accounts = this.accService.accounts;
  }
}
