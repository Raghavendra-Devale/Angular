

# 📄 03-task-list-component.md

# TaskListComponent (Rendering Tasks)

## Purpose
Displays the list of tasks in the UI.



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
Angular re-renders UI  

---

## Key Concept: *ngFor

Used to render lists dynamically

Example:
*ngFor="let task of tasks"

---

## Performance Issue (Default Behavior)

Angular tracks list items by object identity.

👉 If a new array is emitted:
- Angular treats all items as new
- Re-renders entire list

---

## Solution: trackBy

### Function

trackById(index: number, task: Task) {
  return task.id;
}

---

### Usage
```
<li *ngFor="let task of tasks$ | async; trackBy: trackById">
```
---

## Why trackBy?

- Prevents unnecessary DOM re-creation
- Improves performance
- Keeps UI stable (no flicker)

---

## Best Practices

### ✅ DO
- Use async pipe
- Use trackBy for lists
- Emit new array references

### ❌ DON'T
- Subscribe manually
- Mutate arrays directly
- Store state in component

---

## Mental Model

Service → BehaviorSubject  
↓  
Observable (tasks$)  
↓  
TaskListComponent  
↓  
*ngFor renders UI  

---

## Key Insight

UI is not manually updated.

👉 It reacts automatically to Observable emissions.


---

# 🎤 Interview Questions & Answers

---

## ✅ Q1: What is the role of TaskListComponent?

**Answer:**

TaskListComponent is responsible for displaying tasks in the UI. It receives data from a service and renders it using Angular directives like `*ngFor`.

---

## ✅ Q2: Where does TaskListComponent get its data?

**Answer:**

It gets data from a service as an Observable (`tasks$`), which is typically backed by a BehaviorSubject.

---

## ✅ Q3: What does *ngFor do?

**Answer:**

`*ngFor` is a structural directive used to iterate over a collection and render elements dynamically in the template.

---

## ✅ Q4: Why use async pipe?

**Answer:**

The async pipe automatically subscribes to an Observable, updates the UI when new data is emitted, and handles unsubscription to prevent memory leaks.

---

## ✅ Q5: Why not subscribe manually?

**Answer:**

Manual subscriptions require explicit cleanup using `unsubscribe()`. Forgetting this can lead to memory leaks and harder-to-maintain code.

---

## ✅ Q6: What is trackBy?

**Answer:**

`trackBy` is a function used with `*ngFor` to uniquely identify items in a list, helping Angular optimize DOM updates.

---

## ✅ Q7: Why does Angular re-render the entire list?

**Answer:**

By default, Angular tracks items by object identity. When a new array is emitted, it assumes all items are new and re-renders the entire list.

---

## ✅ Q8: What problem does trackBy solve?

**Answer:**

It prevents unnecessary DOM re-creation by allowing Angular to identify which items actually changed, improving performance.

---

## ✅ Q9: What happens if we mutate an array instead of creating a new one?

**Answer:**

Angular may not detect the change properly, especially in optimized change detection strategies, leading to UI not updating as expected.

---

## ✅ Q10: UI flickers when list updates — why?

**Answer:**

Because Angular is re-rendering the entire list due to missing `trackBy`, causing DOM elements to be destroyed and recreated.

---

## ✅ Q11: List not updating — possible reasons?

**Answer:**

* Observable is not emitting new values
* async pipe is missing
* Same array reference is reused (no change detected)

---

## ✅ Q12: Multiple components using same tasks — how sync works?

**Answer:**

All components subscribe to the same Observable from the service. When the BehaviorSubject emits a new value, all subscribed components automatically receive updates and re-render.

---

# 🔥 Senior-Level Additions (This is your edge)

---

## 🧠 1. Why async pipe is preferred

* Handles subscription lifecycle automatically
* Prevents memory leaks
* Keeps template declarative

---

## 🧠 2. Immutable updates are critical

```ts
// ✅ Correct
this.tasksSubject.next([...tasks, newTask]);

// ❌ Wrong
tasks.push(newTask);
this.tasksSubject.next(tasks);
```

👉 Angular works best with **new references**

---

## 🧠 3. Rendering is diff-based (with trackBy)

With `trackBy`:

* Angular compares IDs
* Updates only changed items

Without it:

* Full DOM replacement

---

# 🧠 Final Mental Model

```text
User Action
   ↓
Component triggers service
   ↓
Service updates BehaviorSubject
   ↓
Observable emits new value
   ↓
async pipe receives it
   ↓
*ngFor updates UI efficiently
```

---