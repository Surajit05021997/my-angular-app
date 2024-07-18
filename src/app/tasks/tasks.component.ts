import { Component, inject, Input } from '@angular/core';
import { User } from '../../interfaces/User';
import { NewTask } from '../../interfaces/Task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddNewTaskDialogOpen = false;
  @Input({ required: true }) selectedUser!: User;

  tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  onTaskComplete(id: string) {
    this.tasksService.removeTask(id);
  }

  onAddNewTask() {
    this.isAddNewTaskDialogOpen = true;
  }

  onAddNewTaskDialogClose() {
    this.isAddNewTaskDialogOpen = false;
  }

  onCreateTask(createdTask: NewTask) {
    this.tasksService.addNewTask(createdTask, this.selectedUser.id);
    this.isAddNewTaskDialogOpen = false;
  }
}
