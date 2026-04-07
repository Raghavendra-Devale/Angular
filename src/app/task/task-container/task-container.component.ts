import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { Task, TaskService } from '../task.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent, AsyncPipe],
  templateUrl: './task-container.component.html',
  styleUrl: './task-container.component.css'
})
export class TaskContainerComponent {
  @Output() toggle = new EventEmitter<number>();

  onToggleTask(id: number) {
    this.toggle.emit(id);
  }

  tasks$ = this.taskService.tasks$;
  @Input() tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  onAddTask(title: string) {
    this.taskService.addTask(title);
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  setFilter(filter: 'all' | 'completed' | 'pending') {
    this.taskService.setFilter(filter);
  }
}
