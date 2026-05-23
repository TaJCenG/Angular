import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgePipe } from '../age-pipe';
import { TitlePipe } from '../title-pipe';
import { Empcount } from '../empcount/empcount';

@Component({
  selector: 'app-empdetails',
  imports: [CommonModule, AgePipe, TitlePipe, Empcount],
  templateUrl: './empdetails.html',
  styleUrl: './empdetails.css',
})
export class Empdetails {
  employees: any[] = [];
  selectedRadio: string = 'All';

  constructor() {
    this.employees = [
      { empid: '101', empname: 'Manisha', gender: 'Female', title: 'Software Developer', salary: 110000, department: '1', address: 'Hyderabad', dob: '01/01/1990' },
      { empid: '102', empname: 'Farooq', gender: 'Male', title: 'Sr Software Developer', salary: 130000, department: '2', address: 'Chennai', dob: '02/02/1991' },
      { empid: '103', empname: 'Priyanka', gender: 'Female', title: 'Software Lead', salary: 160000, department: '3', address: 'Bangalore', dob: '03/03/1989' },
      { empid: '104', empname: 'Rakesh', gender: 'Male', title: 'Software Manager', salary: 210000, department: '4', address: 'Delhi', dob: '04/04/1980' },
      { empid: '105', empname: 'Manish', gender: 'Female', title: 'SDET', salary: 110000, department: '1', address: 'Hyderabad', dob: '01/01/1990' },
      { empid: '106', empname: 'Fared', gender: 'Male', title: 'Sr Software Engineer', salary: 130000, department: '2', address: 'Chennai', dob: '02/02/1991' },
      { empid: '107', empname: 'Priya', gender: 'Female', title: 'Software Lead', salary: 160000, department: '3', address: 'Bangalore', dob: '03/03/1989' },
      { empid: '108', empname: 'Raj', gender: 'Male', title: 'Software Architect', salary: 510000, department: '4', address: 'Delhi', dob: '04/04/1980' }
    ];
  }

  getLatestData() {
    const newData = [
      { empid: '109', empname: 'Vivek', gender: 'Male', title: 'Sr Software Developer', salary: 150000, department: '2', address: 'Chennai', dob: '02/02/1991' },
      { empid: '110', empname: 'Komal', gender: 'Female', title: 'Software Lead', salary: 180000, department: '3', address: 'Bangalore', dob: '03/03/1989' },
      { empid: '111', empname: 'Varun', gender: 'Male', title: 'Software Manager', salary: 230000, department: '4', address: 'Delhi', dob: '04/04/1980' }
    ];
    //this.employees = [...this.employees, ...newData]; // 🔴 to trigger change detection and update the view
    const filtered = newData.filter(newEmp =>
    !this.employees.some(emp => emp.empid === newEmp.empid)
  );
  this.employees = [...this.employees, ...filtered];
  }

  trackByEmpCode(index: number, employee: any): string {
  return employee.code; // 🔴 must be unique
}

getTotalEmployees(): number {
  return this.employees.length;
}
getMaleEmployees(): number {
  return this.employees.filter(emp => emp.gender == 'Male').length;
}
getFemaleEmployees(): number {
  return this.employees.filter(emp => emp.gender == 'Female').length;
}

onEmployeeRadioChange(selectedRadio:string) :void{
  this.selectedRadio = selectedRadio;
	console.log('Count Component Selected Radio Button value == >'+ selectedRadio);
}

}
