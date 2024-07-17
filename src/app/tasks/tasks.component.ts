import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { User } from '../../interfaces/User';
import { DUMMY_TASKS } from '../../constant/dummy-tasks';
import { NewTask } from '../../interfaces/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = DUMMY_TASKS;
  isAddNewTaskDialogOpen = false;
  @Input({ required: true }) selectedUser!: User;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUser.id);
  }

  onTaskComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddNewTask() {
    this.isAddNewTaskDialogOpen = true;
  }

  onAddNewTaskDialogClose() {
    this.isAddNewTaskDialogOpen = false;
  }

  onCreateTask(createdTask: NewTask) {
    this.tasks.unshift({
      id: Date.now().toString(),
      userId: this.selectedUser.id,
      title: createdTask.title,
      summary: createdTask.summary,
      dueDate: createdTask.dueDate,
    });
    this.isAddNewTaskDialogOpen = false;
  }
}
