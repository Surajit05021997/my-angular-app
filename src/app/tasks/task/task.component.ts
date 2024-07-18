import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../interfaces/Task';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: false,
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
