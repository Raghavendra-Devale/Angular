import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private filter: 'all' | 'completed' | 'pending' = 'all';


  private readonly tasksSubject = new BehaviorSubject<Task[]>([]);
  readonly tasks$ = this.tasksSubject.asObservable();
  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.tasksSubject.next([...this.tasks]);
    }
  }

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.tasks.push(newTask);
    this.emitTasks();
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.emitTasks();
  }

  toggleComplete(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.emitTasks();
  }

  setFilter(filter: 'all' | 'completed' | 'pending') {
    this.filter = filter;
    this.emitTasks();
  }

  private emitTasks() {
    let filteredTasks = this.tasks;

    if (this.filter === 'completed') {
      filteredTasks = this.tasks.filter(t => t.completed);
    } else if (this.filter === 'pending') {
      filteredTasks = this.tasks.filter(t => !t.completed);
    }

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasksSubject.next([...filteredTasks]);
  }
}
