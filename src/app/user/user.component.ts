import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() userSelect = new EventEmitter<string>();

  get imagePath() {
    return `../../assets/users/${this.user.avatar}`;
  }

  onUserSelect() {
    this.userSelect.emit(this.user.id);
  }
}
