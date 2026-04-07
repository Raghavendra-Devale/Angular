# Project 1 – Task Manager (Complete Understanding)

## Goal

Build strong Angular fundamentals using a real-world app

---

## Architecture

Component (UI + UI Logic)
↓
Service (State + Business Logic)
↓
BehaviorSubject (Reactive State)
↓
Observable
↓
UI Updates

---

## Features Implemented

- Add Task (Reactive Forms)
- Delete Task (Component Interaction)
- Toggle Task Status
- Filter Tasks
- Render List (*ngFor + trackBy)

---

## Core Concepts

### Components
- Handle UI and user interaction

### Services
- Manage state and logic

### Dependency Injection
- Inject services into components

### RxJS (BehaviorSubject)
- Store and emit state

### Reactive Forms
- Handle user input

### Component Communication
- @Input / @Output

### Rendering
- *ngFor
- trackBy

### State Transformation
- Filtering tasks

---

## Data Flow (MOST IMPORTANT)

User Action  
↓  
Component  
↓  
Service  
↓  
BehaviorSubject  
↓  
Observable  
↓  
Component  
↓  
UI Update  

---

## Key Rules

- No state in components
- No business logic in UI components
- Always use service for state
- Always emit new array (immutability)
- Keep BehaviorSubject private

---

## Mental Model

Angular starts → main.ts  
UI starts → AppComponent  
State lives → Service  
UI reacts → Observable  

---

## Common Mistakes

- Storing state in component ❌
- Mutating arrays ❌
- Exposing BehaviorSubject ❌
- Not using trackBy ❌
- Filtering in component ❌

---

## Interview Summary

This project demonstrates Angular fundamentals including component-based architecture, reactive state management using RxJS, and clean separation of concerns using services.

---

## Final Insight

Understanding data flow is more important than writing code.