import { Component } from '@angular/core';
import { DUMMY_USERS } from '../constant/dummy-users';
import  { User } from '../interfaces/User';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;

  onUserSelect(id: string) {
    this.selectedUser = DUMMY_USERS.find((user) => user.id === id);
  }
}
