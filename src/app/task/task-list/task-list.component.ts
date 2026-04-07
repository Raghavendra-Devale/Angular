import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tasks: Task[] | null = [];

  @Output() delete = new EventEmitter<number>();

  @Output() toggle = new EventEmitter<number>();

  // onToggle(id: number) {
  //   console.log("Toggle event emiited for task id: ", id);
  //   this.toggle.emit(id);
  // }

  constructor(private taskService: TaskService) { }

  onDelete(id: number) {
    console.log("Delete event emiited for task id: ", id);
    this.delete.emit(id);
  }

  onToggleTask(id: number) {
    this.taskService.toggleComplete(id);
  }
}
