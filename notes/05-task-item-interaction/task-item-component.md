# Task List + Task Item Components (Rendering & Interaction)

---

# 🧩 Overview

This module covers:

- Rendering list of tasks
- Handling user actions (delete, toggle)
- Component communication (Parent ↔ Child)
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

# 🔄 Combined Data + Event Flow

User Action  
↓  
TaskItemComponent (emit)  
↓  
TaskListComponent (handle)  
↓  
Service updates BehaviorSubject  
↓  
Observable emits  
↓  
TaskList receives new data  
↓  
*ngFor updates UI  

---

# 🎯 Practice Questions – Task List Component

---

## Easy

### Q1: What is the role of TaskListComponent?
Displays tasks in the UI.

---

### Q2: Where does it get data from?
From service via Observable (tasks$)

---

### Q3: What does *ngFor do?
Renders a list of items in the template.

---

## Medium

### Q4: Why use async pipe?
It subscribes automatically and updates UI when data changes.

---

### Q5: Why not subscribe manually?
Manual subscription requires cleanup and can cause memory leaks.

---

### Q6: What is trackBy?
A function used to optimize rendering by tracking items uniquely.

---

## Hard

### Q7: Why does Angular re-render entire list?
Because it tracks items by object identity, and new arrays are treated as new data.

---

### Q8: What problem does trackBy solve?
Prevents full DOM re-creation and improves performance.

---

### Q9: What happens if we mutate array instead of creating new one?
Angular may not detect changes properly, causing UI update issues.

---

## Scenario-Based

### Q10: UI flickers when list updates — why?
Because Angular is re-rendering entire list due to missing trackBy.

---

### Q11: List not updating — possible reasons?
- Observable not emitting
- async pipe missing
- same array reference used

---

### Q12: Multiple components using same tasks — how sync works?
Service emits new value → all subscribed components update automatically

---

# 🎯 Practice Questions – Task Item Component

---

## Easy

### Q1: What is TaskItemComponent?
Represents a single task in the UI.

---

### Q2: What does @Input do?
Receives data from parent.

---

### Q3: What does @Output do?
Sends events to parent.

---

## Medium

### Q4: Why not call service in child?
Breaks separation of concerns and tightly couples component.

---

### Q5: Where is delete logic handled?
In parent (TaskListComponent)

---

## Hard

### Q6: Explain delete flow
User click → Child emits → Parent handles → Service updates → UI updates

---

### Q7: What is smart vs dumb component?

Smart:
- Handles logic
- Talks to service

Dumb:
- Displays UI
- Emits events

---

## Scenario-Based

### Q8: Delete not working — where to debug?
- EventEmitter
- Parent handler
- Service method

---

### Q9: Multiple child components emitting — how handled?
Parent listens and processes each event

---

# 🔥 Final Key Insight

Angular follows **unidirectional data flow**:

Parent → Child (data via @Input)  
Child → Parent (events via @Output)

---

# 🧠 Ultimate Mental Model

Service (State)
   ↓
TaskListComponent (Logic)
   ↓
TaskItemComponent (UI)
   ↑
Events (delete/toggle)