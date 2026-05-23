import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empcount',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './empcount.html',
  styleUrl: './empcount.css',
})
export class Empcount {
  @Input() All: number = 0;
  @Input() Male: number = 0;
  @Input() Female: number = 0;

  selectedRadio: string = 'All';

  @Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  
  onRadioChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadio)
    console.log('Selected Radio:', this.selectedRadio);
  }

}
