import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../../interfaces/Task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() addNewTaskDialogclose = new EventEmitter();
  @Output() createTask = new EventEmitter<NewTask>();

  title = '';
  summary = '';
  dueDate = '';

  onAddNewTaskDialogClose() {
    this.addNewTaskDialogclose.emit();
  }

  onSubmit() {
    this.createTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
  }
}
