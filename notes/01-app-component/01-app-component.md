# AppComponent

## Definition
Root component of an Angular application

---

## Role
- Entry point of UI
- Container for all child components

---

## Selector

selector: 'app-root'

Connected to:

<app-root></app-root>

---

## Flow

main.ts → AppComponent → UI Render

---

## Responsibilities

### ✅ Should Do
- Define layout structure
- Combine child components
- Host router-outlet (if routing is used)

### ❌ Should NOT Do
- Business logic
- API calls
- State management

---

## Important Rule

Component = UI + UI Logic  
Service = Business Logic + State  

---

## Example (Task Manager)

<h1>Task Manager</h1>

<app-task-form></app-task-form>  
<app-task-list></app-task-list>

---

## Key Insight

AppComponent is NOT the entire application  
It is just the root container

---

## Interview Answers

### What is AppComponent?

AppComponent is the root component that Angular bootstraps first. It acts as the container for the entire UI and holds child components.

---

### What connects AppComponent to index.html?

The selector (app-root) connects the component to the DOM element in index.html.

---

### What happens if selector does not match?

Angular cannot find the matching DOM element, so the component is not rendered and the UI remains blank.

---

### Why avoid business logic in AppComponent?

To maintain separation of concerns, improve reusability, and keep components focused only on UI.

---

### What does AppComponent contain in your project?

It contains layout structure and child components like task form and task list.