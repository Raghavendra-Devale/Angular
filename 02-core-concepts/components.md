# Angular Components

## Concept

Components are the **basic building blocks of Angular applications**.

Each component controls a specific part of the user interface.

A component consists of three main parts:

* TypeScript class (logic)
* HTML template (view)
* CSS styles (appearance)

---

## Why Angular Uses Components

Large applications become difficult to manage if everything is written in a single file.

Components allow applications to be divided into **small reusable UI pieces**.

Each component handles its own logic and UI.

---

## Example

Component definition

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  title = "Dashboard";

}
```

Selector

```html
<app-dashboard></app-dashboard>
```

Angular renders the component where the selector is used.

---

## Real Project Usage

In the project:

LoginComponent
→ handles authentication UI

DashboardComponent
→ displays system statistics

AddOrderComponent
→ form for creating orders

Each page is implemented as a component.

---

## Best Practices

Keep components small and focused.

Move reusable logic to services.

Split large components into smaller components.

---

## Common Mistakes

Putting too much business logic inside components.

Creating very large components with many responsibilities.

Not separating UI and service logic.

---

## Interview Questions

What is an Angular component?

What does the `@Component` decorator do?

What are the main parts of a component?

What is a component selector?
