import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../interfaces/Task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskComplete = new EventEmitter();

  onTaskComplete() {
    this.taskComplete.emit(this.task.id);
  }
}
