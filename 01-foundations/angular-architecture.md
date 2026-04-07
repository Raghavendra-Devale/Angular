# Angular Architecture

## Concept

Angular is a **component-based framework** used to build Single Page Applications (SPA).

An Angular application is made of multiple building blocks that work together.

Main building blocks:

* Components
* Templates
* Services
* Router
* Dependency Injection

Each part has a specific responsibility which keeps the application structured and scalable.

---

## Why Angular Uses This Architecture

Large frontend applications become hard to manage if all logic exists in one place.

Angular separates responsibilities:

Components → UI logic
Templates → UI structure
Services → business logic and API calls
Router → navigation between views

This separation improves maintainability and code reuse.

---

## Basic Structure

Angular Application

```
App
 ├── Components
 │     UI logic
 │
 ├── Templates
 │     HTML structure
 │
 ├── Services
 │     shared logic / API calls
 │
 └── Router
       navigation
```

---

## Real Project Usage

In our project:

DashboardComponent
→ controls dashboard UI

DashboardService
→ fetches dashboard statistics from API

Router
→ navigates between login page and dashboard page

---

## Best Practices

Keep components focused on one responsibility.

Move reusable logic to services.

Separate UI logic from data fetching logic.

---

## Common Mistakes

Placing too much logic inside components.

Making API calls directly inside templates.

Not separating reusable logic into services.

---

## Interview Questions

What is Angular architecture?

What are the main building blocks of Angular?

Why does Angular follow a component-based architecture?

What is the difference between a component and a service?
