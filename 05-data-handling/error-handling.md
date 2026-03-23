# Error Handling in Angular HTTP Requests

## 1. Concept

Error handling in Angular ensures that API failures do not break the application and users receive meaningful feedback.

Errors can occur due to:

* network issues
* server errors (500)
* invalid requests (400)
* authentication failures (401/403)

Angular handles errors using **RxJS operators**.

---

## 2. Why Error Handling Is Important

Without proper error handling:

* UI may crash or show empty data
* users won’t understand what went wrong
* debugging becomes difficult

Error handling ensures application stability and better user experience.

---

## 3. Handling Errors Using catchError

Errors are handled inside services using RxJS.

Example:

```typescript id="d4n7wq"
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

getSummary() {
  return this.http.get('/api/dashboard').pipe(
    catchError(error => {
      console.error('Dashboard API Error:', error);
      return throwError(() => error);
    })
  );
}
```

---

## 4. Handling Errors in Component

```typescript id="h3t6kp"
this.dashboardService.getSummary().subscribe({
  next: data => {
    this.dashboardSummary = data;
  },
  error: err => {
    this.error = true;
  }
});
```

---

## 5. Template Handling

```html id="qz7vnm"
<div *ngIf="error">
  Failed to load dashboard data
</div>
```

This prevents UI from breaking and shows a user-friendly message.

---

## 6. Real Project Usage

In the dashboard:

* API call is made through DashboardService
* If API fails → error is caught in service
* Component handles error state
* Template shows fallback message

Flow:

Component → Service → HttpClient → API
→ Error → catchError → Component → UI message

---

## 7. Best Practices

Handle errors inside services using `catchError`.

Show user-friendly messages in UI.

Log errors for debugging.

Avoid exposing raw backend errors to users.

---

## 8. Common Mistakes

Ignoring API errors completely.

Handling errors only in components.

Showing technical error messages directly to users.

Not maintaining error state in component.

---

## 9. Interview Questions

How does Angular handle HTTP errors?

What is `catchError`?

Where should error handling be implemented?

How do you display API errors in the UI?

What happens if an HTTP request fails?
