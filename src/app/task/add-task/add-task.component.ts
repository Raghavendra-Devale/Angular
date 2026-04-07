import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  title: string = '';

  @Output() add = new EventEmitter<string>();

  constructor() { }
  onAddTask() {
    if (!this.title.trim()) return;
    this.add.emit(this.title);
    this.title = '';
  }
}
