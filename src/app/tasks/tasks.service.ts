import { Injectable } from "@angular/core";
import { NewTask } from "../../interfaces/Task";
import { DUMMY_TASKS } from '../../constant/dummy-tasks';

@Injectable({providedIn: 'root'})
export class TasksService {
  tasks = DUMMY_TASKS;
  
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addNewTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: Date.now().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
