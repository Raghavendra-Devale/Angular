# Error Handling in Angular HTTP Requests

## Concept

When communicating with backend APIs, errors can occur due to:

* network issues
* server errors
* invalid requests
* authentication problems

Angular provides mechanisms to handle these errors.

---

## Handling Errors in HTTP Requests

Errors can be handled using the `catchError` operator from RxJS.

Example:

```typescript
import { catchError } from 'rxjs/operators';

getOrders() {
  return this.http.get('/api/orders')
    .pipe(
      catchError(error => {
        console.error('API error', error);
        throw error;
      })
    );
}
```

---

## Handling Errors in Components

```typescript
this.orderService.getOrders().subscribe({
  next: data => this.orders = data,
  error: err => console.log('Failed to load orders')
});
```

---

## Real Project Usage

Example scenario:

Dashboard API fails.

Instead of crashing the UI, the application shows an error message or fallback state.

---

## Best Practices

Handle API errors inside services.

Provide user-friendly error messages.

Log errors for debugging.

---

## Common Mistakes

Ignoring API errors.

Handling errors in multiple places unnecessarily.

Showing technical error messages directly to users.

---

## Interview Questions

How does Angular handle HTTP errors?

What is `catchError`?

Where should error handling logic be placed?

What happens when an HTTP request fails?
