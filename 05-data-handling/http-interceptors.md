# HTTP Interceptors

## Concept

HTTP Interceptors allow Angular applications to modify HTTP requests and responses globally.

They act as middleware between the Angular application and the backend server.

---

## Why Angular Uses Interceptors

Many applications need to perform the same actions for every request.

Examples:

* adding authentication tokens
* logging requests
* handling global errors

Interceptors provide a centralized solution.

---

## Example Interceptor

```typescript
import { HttpInterceptor } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req, next) {

    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token')
    });

    return next.handle(clonedRequest);

  }

}
```

---

## Real Project Usage

Example scenario:

Every API request requires an authentication token.

Instead of manually adding the token everywhere, an interceptor attaches it automatically.

---

## Best Practices

Use interceptors for cross-cutting concerns.

Keep interceptor logic lightweight.

Handle global API errors in interceptors.

---

## Common Mistakes

Overloading interceptors with complex logic.

Creating multiple interceptors for similar tasks.

Modifying requests incorrectly.

---

## Interview Questions

What is an HTTP interceptor in Angular?

Why are interceptors useful?

How do interceptors modify requests?

Where are interceptors registered in Angular?
