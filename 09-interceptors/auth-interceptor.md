# Auth Interceptor

## 1. Concept

Auth interceptor attaches authentication tokens (JWT or Firebase token) to every outgoing HTTP request.

---

## 2. Why It Is Needed

Most APIs require authentication.

Without interceptor:

* token must be added manually in every API call
* code duplication occurs

Interceptor solves this globally.

---

## 3. Example

```typescript id="1l6t9x"
import { HttpInterceptor } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req, next) {

    const token = localStorage.getItem('token');

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(modifiedReq);
  }

}
```

---

## 4. Real Project Usage

In your project:

* Firebase token is generated
* interceptor attaches token to every API request

---

## 5. Best Practices

Check if token exists before attaching.

Avoid modifying request unnecessarily.

Keep logic simple.

---

## 6. Common Mistakes

Attaching token to all requests blindly.

Not handling missing or expired tokens.

---

## 7. Interview Questions

What is an auth interceptor?

How do you attach a token to requests?

Why is an interceptor better than manual headers?
