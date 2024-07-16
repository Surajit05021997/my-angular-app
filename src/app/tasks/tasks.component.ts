import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../../interfaces/User';
import { DUMMY_TASKS } from '../../constant/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) selectedUser!: User;

  get selectedUserTasks() {
    return DUMMY_TASKS.filter((task) => task.userId === this.selectedUser.id);
  }
}
