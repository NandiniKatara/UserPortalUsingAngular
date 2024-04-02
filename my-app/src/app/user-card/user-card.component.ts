import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AllUsersList } from '../allUsersList';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: AllUsersList;
  @Output() viewDetails: EventEmitter<any> = new EventEmitter<any>();

  onClick() {
    this.viewDetails.emit(this.user.id);
  }
}
