import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-visitingcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitingcard.component.html',
  styleUrl: './visitingcard.component.css'
})
export class VisitingcardComponent {

  customers:any[]=[];

  constructor(){
    this.customers=[
      {
       custname:'Sandhya Rani',
       title:'Software Lead',
       salary:'100000',
       department:'1',
       address:[
              '2-22-222',
              'Gachibowli',
              'Hyderabad'
       ],
       phones:[
             '111-1111-111',
             '222-222-2222'
       ]
      },

      {
        custname:'Vijay Kumar',
        title:'Software Developer',
        salary:'80000',
        department:'2',
        address:[
               '3-33-333',
               'Kukatpally',
               'Hyderabad'
        ],
        phones:[
              '333-333-3333',
              '444-444-4444'
        ]
       }

    ]
  }


}
