import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Accountsservice } from '../accountsservice';

@Component({
  selector: 'app-accountcreate',
  standalone:true,
  templateUrl: './accountcreate.component.html',
  styleUrls: ['./accountcreate.component.css']
})
export class AccountcreateComponent implements OnInit {

  constructor(private accountsService: Accountsservice) { }
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    this.accountsService.addAccount(accountName, accountStatus);
  }
  ngOnInit(): void {}
}
