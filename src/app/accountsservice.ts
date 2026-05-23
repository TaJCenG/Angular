import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Accountsservice {
  accounts = [
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
    addAccount(accName: string, accStatus: string) {
    console.log('Add account method is called from the service');
    console.log('account name:' + accName + ' account status:' + accStatus);
    this.accounts.push({name:accName, status:accStatus});
  }
  updateAccount(id: number, newStatus: string) {
    console.log('Update account method is called from the service');
    console.log('current status' + this.accounts[id].status);
    console.log('new status' + newStatus);
    this.accounts[id].status = newStatus;}
}
