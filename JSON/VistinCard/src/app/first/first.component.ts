import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';
import { SecondComponent } from '../second/second.component';
import { FormsModule } from '@angular/forms';
import { VisitingcardComponent } from '../visitingcard.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ThirdComponent,SecondComponent,FormsModule,VisitingcardComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  msg:string='Hello Ashok IT';
  userName:string="";
  firstName:string="";
  lastName:string="";
  email:string="";

  dateString:string="";
  controlFlag:boolean=false;
  classStatus:string="";
  guestName:string="Vijay Kumar";

  constructor(){
    this.userName="ashokit";
    this.firstName="Ashok";
    this.lastName="IT";
    this.email="ashok.it@gmail.com";

    setInterval (  () => {
      let currentDate=new Date();
      this.dateString=currentDate.toDateString() + "  " + currentDate.toLocaleTimeString();

      this.controlFlag=Math.random()> 0.5 ? true : false;
    }
    ,5000)
  }

  getUserName():string{
    return this.userName;
  }

  getFirstName():string{
    return this.firstName;
  }

  getLastName():string{
    return this.lastName;
  }

  getEmail():string{
    return this.email;
  }

  updateCourse(courseName:string){
    this.classStatus=courseName + "   " + " Class is Started";

  }

}
