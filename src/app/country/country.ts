import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CountryService } from '../country';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country',
  imports: [CommonModule, FormsModule],
  templateUrl: './country.html',
  styleUrl: './country.css',
})
export class CountryComponent implements OnInit {
  public result:any[] = [];
  constructor(private service:CountryService,
    private cd:ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    console.log("ngOnInit called");
    this.service.getCountryData().subscribe({

      next: (posRes:any) => {
        console.log("REST API Invoked and response is ",posRes);
        console.log("SUCCESS", posRes);
        this.result = [...posRes];
        this.cd.detectChanges();
      },
      error: (e) => {
        console.log("ERROR OCCURRED");
        console.log("Error communicating with backend API",e);
      },
      complete: () => {
        console.log("REQUEST COMPLETED");
        console.log("Completed REST API communication");
      }
    });  
  }
  trackByIndex(index:number,item:any):number{
  return index;
}
}
