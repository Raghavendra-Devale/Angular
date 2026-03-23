# HTTP Interceptors Overview

## 1. Concept

An HTTP interceptor is a class that intercepts HTTP requests and responses.

It implements the `HttpInterceptor` interface.

---

## 2. Why Angular Uses Interceptors

Without interceptors:

* every service must repeat logic
* code duplication increases
* maintenance becomes difficult

Interceptors allow global request/response handling.

---

## 3. Basic Example

```typescript id="9dzc6p"
import { HttpInterceptor } from '@angular/common/http';

export class SimpleInterceptor implements HttpInterceptor {

  intercept(req, next) {
    console.log('Request sent:', req.url);
    return next.handle(req);
  }

}
```

---

## 4. How It Works

* request is intercepted
* modified if needed
* passed to next handler
* response is intercepted on return

---

## 5. Registering Interceptor

```typescript id="9j6g1p"
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SimpleInterceptor,
    multi: true
  }
]
```

---

## 6. Real Project Usage

Used for:

* authentication headers
* global error handling
* logging

---

## 7. Best Practices

Keep interceptors lightweight.

Use multiple interceptors for different concerns.

---

## 8. Common Mistakes

Forgetting `multi: true`.

Modifying request incorrectly.

Putting business logic inside interceptors.

---

## 9. Interview Questions

What is an HTTP interceptor?

How does Angular process interceptors?

Why use `multi: true`?

Where are interceptors registered?
