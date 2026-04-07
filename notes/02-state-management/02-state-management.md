# State Management with RxJS

## Problem with Variables

tasks: Task[] = [];

### Issues
- Not reactive
- Cannot notify multiple components
- Hard to maintain shared state

---

## Solution: BehaviorSubject

private tasksSubject = new BehaviorSubject<Task[]>([]);
tasks$ = this.tasksSubject.asObservable();

---

## Why BehaviorSubject?

- Holds latest value
- Emits updates automatically
- Supports reactive UI updates

---

## Data Flow

Component → Service → BehaviorSubject  
↓  
Observable emits  
↓  
Component receives  
↓  
UI updates  

---

## Best Practices

### ✅ DO
- Keep BehaviorSubject private
- Expose Observable (tasks$)

### ❌ DON'T
- Expose BehaviorSubject directly
- Store state inside components

---

## Example

### Service

private tasksSubject = new BehaviorSubject<Task[]>([]);
tasks$ = this.tasksSubject.asObservable();

addTask(task: Task) {
  const current = this.tasksSubject.value;
  this.tasksSubject.next([...current, task]);
}

---

### Component

tasks$ = this.taskService.tasks$;

---

## Key Insight

BehaviorSubject = State + Stream

---

## Interview Answers

### Why not use variables?

Variables are not reactive and cannot notify components when data changes.

---

### What is BehaviorSubject?

It is an RxJS subject that stores the latest value and emits it to all subscribers.

---

### Why not expose BehaviorSubject?

It breaks encapsulation and allows uncontrolled state modification.

---

### How does UI update automatically?

BehaviorSubject emits new values → Observable updates → Angular change detection updates UI.

---

### Where should state be stored?

State should be stored in services, not components.

---

### Explain data flow

User action → Component → Service → BehaviorSubject → Observable → Component → UI update