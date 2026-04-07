# Task Module (Rendering + Interaction + Filtering)

---

# 🧩 Overview

This module covers:

- Rendering tasks (TaskListComponent)
- Handling user actions (TaskItemComponent)
- Filtering tasks (Service layer)
- Component communication (Parent ↔ Child)
- Reactive state management (RxJS)
- Performance optimization

---

# 📌 TaskListComponent (Rendering Tasks)

## Purpose

Displays the list of tasks in the UI.

---

## Responsibilities

### ✅ DO
- Receive task data from service (Observable)
- Render tasks using *ngFor
- Handle UI events (delete, toggle)

### ❌ DO NOT
- Store tasks
- Manage state
- Perform business logic

---

## Data Source

tasks$ = this.taskService.tasks$;

---

## Template Example

<ul>
  <li *ngFor="let task of tasks$ | async">
    {{ task.title }}
  </li>
</ul>

---

## Rendering Flow

Service updates BehaviorSubject  
↓  
Observable emits new value  
↓  
TaskListComponent receives data  
↓  
Angular re-renders list  

---

## Key Concept: *ngFor

Used to render lists dynamically

Example:

*ngFor="let task of tasks"

---

## Important Issue (Default Behavior)

Angular tracks items by object identity.

👉 If a new array is emitted:
- Entire list gets re-rendered
- DOM recreated

---

## Solution: trackBy

### Function

trackById(index: number, task: Task) {
  return task.id;
}

---

### Usage

<li *ngFor="let task of tasks$ | async; trackBy: trackById">

---

## Why trackBy?

- Prevents unnecessary DOM re-creation
- Improves performance
- Keeps UI stable

---

## Best Practices

### ✅ DO
- Use async pipe
- Use trackBy
- Emit new array references

### ❌ DON'T
- Subscribe manually
- Mutate arrays directly
- Store state in component

---

## Key Insight

UI updates automatically based on Observable emissions.

---

## Mental Model

Service → BehaviorSubject  
↓  
Observable  
↓  
TaskListComponent  
↓  
*ngFor renders UI  

---

## Common Mistakes

- Subscribing manually instead of async pipe ❌
- Not using trackBy ❌
- Mutating array ❌
- Storing tasks in component ❌

---

# 📌 TaskItemComponent (Single Task)

## Purpose

Represents a single task item in the list.

---

## Responsibilities

### ✅ DO
- Display task data
- Handle user actions (delete, toggle)
- Emit events to parent

### ❌ DO NOT
- Call services
- Manage state

---

## Input

@Input() task: Task;

---

## Output

@Output() delete = new EventEmitter<number>();

---

## Template Example

<li>
  {{ task.title }}
  <button (click)="onDelete()">Delete</button>
</li>

---

## Component Logic

onDelete() {
  this.delete.emit(this.task.id);
}

---

## Event Flow

User clicks delete  
↓  
TaskItemComponent emits event  
↓  
TaskListComponent receives event  
↓  
Calls service  
↓  
State updates  
↓  
UI updates  

---

## Parent Usage Example

<app-task-item
  *ngFor="let task of tasks$ | async; trackBy: trackById"
  [task]="task"
  (delete)="onDeleteTask($event)">
</app-task-item>

---

## Key Insight

Child → emits  
Parent → acts  

---

## Mental Model

TaskItem → UI + emit  
TaskList → logic + service  

---

## Smart vs Dumb Components

### Dumb Component (TaskItem)
- UI only
- Uses @Input / @Output
- No business logic

---

### Smart Component (TaskList)
- Handles logic
- Talks to service
- Manages data flow

---

## Common Mistakes

- Calling service directly in child ❌
- Not using @Output ❌
- Mixing responsibilities ❌

---

# 📌 Task Filtering (All / Completed / Pending)

## Purpose

Filter tasks based on status

---

## Where Logic Lives

Service

---

## Why Service?

- Centralized logic
- Reusable across components
- Keeps components clean

---

## Filtering Types

- All Tasks
- Completed Tasks
- Pending Tasks

---

## Basic Implementation (Problematic)

filterTasks(type: string) {
  const tasks = this.tasksSubject.value;

  let filtered;

  if (type === 'completed') {
    filtered = tasks.filter(task => task.completed);
  } else if (type === 'pending') {
    filtered = tasks.filter(task => !task.completed);
  } else {
    filtered = tasks;
  }

  this.tasksSubject.next(filtered);
}

---

## ⚠️ Problem

This overwrites original data → leads to data loss

---

## ✅ Correct Approach

Maintain original state separately

---

## Implementation

private allTasks: Task[] = [];

private tasksSubject = new BehaviorSubject<Task[]>([]);
tasks$ = this.tasksSubject.asObservable();

---

addTask(task: Task) {
  this.allTasks = [...this.allTasks, task];
  this.tasksSubject.next(this.allTasks);
}

---

filterTasks(type: string) {
  let filtered;

  if (type === 'completed') {
    filtered = this.allTasks.filter(t => t.completed);
  } else if (type === 'pending') {
    filtered = this.allTasks.filter(t => !t.completed);
  } else {
    filtered = this.allTasks;
  }

  this.tasksSubject.next(filtered);
}

---

## Important Rule

- Always return NEW array
- Do NOT mutate existing array

---

## Data Flow

User selects filter  
↓  
Component calls service  
↓  
Service filters tasks  
↓  
BehaviorSubject emits  
↓  
UI updates  

---

## Mental Model

Original State → Service → Filtered State → UI

---

## Advanced (Reactive Filtering)

filter$ = new BehaviorSubject<string>('all');

tasks$ = combineLatest([this.allTasks$, this.filter$]).pipe(
  map(([tasks, filter]) => {
    if (filter === 'completed') return tasks.filter(t => t.completed);
    if (filter === 'pending') return tasks.filter(t => !t.completed);
    return tasks;
  })
);

---

## Key Insight

Filtering is derived state, not source state

---

## Common Mistakes

- Filtering in component ❌
- Mutating original array ❌
- Losing original data ❌

---

# 🔄 Combined Data + Event Flow

User Action  
↓  
TaskItemComponent (emit)  
↓  
TaskListComponent (handle)  
↓  
Service updates state / applies filter  
↓  
BehaviorSubject emits  
↓  
Observable updates  
↓  
TaskList re-renders UI  

---

# 🎯 Practice Questions – Task List

## Easy

### Q1: Role of TaskListComponent?
Displays tasks in UI.

---

### Q2: Data source?
Service via Observable (tasks$)

---

### Q3: What does *ngFor do?
Renders list dynamically.

---

## Medium

### Q4: Why async pipe?
Auto subscribe + UI update.

---

### Q5: Why not manual subscribe?
Memory leaks + complexity.

---

### Q6: What is trackBy?
Optimizes DOM rendering.

---

## Hard

### Q7: Why full re-render?
Object identity tracking.

---

### Q8: trackBy benefit?
Prevents DOM recreation.

---

### Q9: Mutating array issue?
UI may not update.

---

## Scenario

### Q10: UI flicker?
Missing trackBy.

---

### Q11: List not updating?
- No emission
- Missing async
- Same reference

---

### Q12: Multiple components sync?
Service Observable handles it.

---

# 🎯 Practice Questions – Task Item

## Easy

### Q1: TaskItemComponent?
Single task UI.

---

### Q2: @Input?
Receive data.

---

### Q3: @Output?
Emit events.

---

## Medium

### Q4: Why not service in child?
Breaks separation.

---

### Q5: Where delete logic?
Parent component.

---

## Hard

### Q6: Delete flow?
Child → Parent → Service → UI

---

### Q7: Smart vs Dumb?

Smart → logic  
Dumb → UI  

---

## Scenario

### Q8: Delete not working?
Check emit / handler / service.

---

### Q9: Multiple emits?
Parent handles all.

---

# 🎯 Practice Questions – Filtering

## Easy

### Q1: What is filtering?
Condition-based display.

---

### Q2: Where logic?
Service.

---

## Medium

### Q3: Why not component?
Breaks architecture.

---

### Q4: Method used?
filter()

---

## Hard

### Q5: Why new array?
Triggers change detection.

---

### Q6: Mutation issue?
UI not updating.

---

## Scenario

### Q7: Data loss?
Overwriting original state.

---

### Q8: Fix?
Maintain allTasks separately.

---

### Q9: Multi-component sync?
Observable updates all.

---

# 🔥 Final Key Insight

Angular follows unidirectional data flow:

Parent → Child (data via @Input)  
Child → Parent (events via @Output)  

State → Service → Observable → UI  

---

# 🧠 Ultimate Mental Model

Service (State)
   ↓
TaskListComponent (Logic)
   ↓
TaskItemComponent (UI)
   ↑
Events (delete/toggle)