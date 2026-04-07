# Angular Services

## Concept

Services are classes used to store reusable business logic that can be shared across multiple components.

Services are commonly used for:

* API communication
* authentication logic
* data sharing between components
* reusable utilities

Services are typically injected into components using Angular's dependency injection system.

---

## Why Angular Uses Services

If business logic is written directly inside components:

* components become large
* code duplication increases
* maintenance becomes difficult

Services allow logic to be centralized and reused across the application.

---

## Example

Creating a service

```typescript id="m5w02o"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getSummary() {
    // API logic
  }

}
```

---

## Using the Service in a Component

```typescript id="l2kdxk"
constructor(private dashboardService: DashboardService) {}

ngOnInit() {
  this.dashboardService.getSummary();
}
```

Angular automatically injects the service instance into the component.

---

## Real Project Usage

In the dashboard project:

DashboardComponent
→ displays statistics

DashboardService
→ fetches data from backend API

Flow

Component → Service → API → Component → Template

---

## Best Practices

Keep services focused on one responsibility.

Use services for API communication.

Avoid putting UI logic inside services.

---

## Common Mistakes

Making API calls directly inside components.

Creating services that handle unrelated tasks.

Duplicating logic across multiple services.

---

## Interview Questions

What is an Angular service?

Why are services important in Angular?

Where should API calls be placed in Angular applications?

What does `@Injectable()` do?
