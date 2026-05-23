import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, ReversePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  var_one:string = "Angular";
  var_two:string = "Spring Boot";
  var_three:string = "Java"

  var_four:number = 1234.1234;
  var_five:number = 100;

  var_six:Date = new Date();

  var_seven:any = {num:100};
  var_eight:any = {num:100, str:"Angular"};

  var_nine:string = "niddujaT" 

}
