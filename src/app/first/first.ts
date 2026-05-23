import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-first',
  standalone: true,
  template: ` <h2>CHECK: {{customer3?.name}}</h2>
    <h2>Salary: {{customer3?.salary}}</h2>`,
  templateUrl: './first.html',
  imports: [FormsModule, CommonModule]
})
export class First implements OnInit {
  userName: string = "Taj";
  email: string = "taj@email.com";
  phNumber: string = "1234567890";
  address: string = "123, Main Street";
  name: string = "Feroz";
  age: number = 25;
  dateString = "";
  guestName: string = "";
  classStatus: string = "";
  isValid: boolean = false;
  customer = {
    name: "Taj",
    email: "taj@email.com",
    salary: 50000
  };
  customers = [
    { name: "JSON", salary: 50000 },
    { name: "JSON_1", salary: 70000 }
  ];

  customer1 = {
    name: "Taju",
    department: 2
  };

  customer2 = {
    name: "TajPhone",
    phones: ["111-111", "222-222"]
  };
  onInputChange(value: string) {
    this.guestName = value;

    // validation: minimum 3 characters
    this.isValid = value.trim().length >= 3;
  }
  constructor() {
    this.updateTime(); // 🔴 immediate call

    setInterval(() => {
      this.updateTime();
    }, 1000); // 🔴 real-time
  }

  updateTime() {
    const currentDate = new Date();
    this.dateString =
      currentDate.toDateString() + " " +
      currentDate.toLocaleTimeString();
  }
  updateStatus() {
    this.classStatus = "Registered: " + this.guestName;
  }

  @Input() customer3!: any;

  ngOnInit() {
    console.log("Received:", this.customer3);
  }
}