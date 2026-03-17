# Angular HTTP Client

## Concept

Angular provides the **HttpClient service** to perform HTTP requests.

It allows Angular applications to communicate with backend APIs using standard HTTP methods.

Common HTTP methods include:

* GET → retrieve data
* POST → create data
* PUT / PATCH → update data
* DELETE → remove data

---

## Why Angular Uses HttpClient

Modern applications rely heavily on APIs. Angular's HttpClient simplifies working with HTTP requests and responses.

Benefits include:

* simplified API communication
* automatic JSON parsing
* integration with Observables

---

## Example

Service making a GET request:

```typescript
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getSummary() {
    return this.http.get('/api/dashboard');
  }

}
```

---

## Using HttpClient in a Component

```typescript
this.dashboardService.getSummary().subscribe(data => {
  this.dashboardSummary = data;
});
```

The component subscribes to the observable and receives the API response.

---

## Real Project Usage

In your dashboard project:

DashboardService calls the API.

DashboardComponent subscribes to the service.

The template displays the received data.

Flow:

Component → Service → HttpClient → API → Response → UI

---

## Best Practices

Perform API calls inside services.

Use typed interfaces for API responses.

Avoid calling APIs directly in components.

---

## Common Mistakes

Using `any` for API responses.

Making HTTP calls inside multiple components instead of services.

Ignoring HTTP errors.

---

## Interview Questions

What is HttpClient in Angular?

Why should API calls be placed inside services?

What HTTP methods are commonly used in Angular?

What does HttpClient return?
