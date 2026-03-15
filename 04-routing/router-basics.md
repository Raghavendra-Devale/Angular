# Angular Router Basics

## Concept

Angular Router enables navigation between different views in a single-page application.

Instead of loading a new HTML page, Angular replaces the currently displayed component with another component.

---

## Why Angular Uses Router

Traditional websites reload the entire page for navigation.

Angular Router allows:

* dynamic component loading
* faster navigation
* improved user experience
* URL-based application state

---

## Route Configuration

Routes map URL paths to components.

Example:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
```

---

## Router Outlet

Angular uses `router-outlet` to determine where routed components should appear.

```html
<router-outlet></router-outlet>
```

Whenever the route changes, Angular loads the matching component into this outlet.

---

## Navigation Example

Navigation can be triggered programmatically.

```typescript
this.router.navigate(['/dashboard']);
```

Or directly in templates.

```html
<a routerLink="/dashboard">Dashboard</a>
```

---

## Real Project Usage

In your project:

LoginComponent
→ user authentication

After login success

Router → navigates to DashboardComponent

---

## Best Practices

Organize routes by features.

Use lazy loading for large modules.

Protect sensitive routes using guards.

---

## Common Mistakes

Hardcoding navigation URLs.

Putting all routes in a single large file.

Not handling invalid routes.

---

## Interview Questions

What is Angular Router?

What is the purpose of `router-outlet`?

What is the difference between `routerLink` and `router.navigate()`?

How does Angular handle navigation without page reload?
