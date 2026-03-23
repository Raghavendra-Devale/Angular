# Error Interceptor

## 1. Concept

Error interceptor handles HTTP errors globally instead of handling them in every service.

---

## 2. Why It Is Needed

Without interceptor:

* every service must handle errors
* code duplication increases

Interceptor centralizes error handling.

---

## 3. Example

```typescript id="s2k8d9"
import { HttpInterceptor } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class ErrorInterceptor implements HttpInterceptor {

  intercept(req, next) {
    return next.handle(req).pipe(
      catchError(error => {
        console.error('Global API Error:', error);
        return throwError(() => error);
      })
    );
  }

}
```

---

## 4. Real Project Usage

Example:

* API fails
* interceptor logs error
* component shows user-friendly message

---

## 5. Best Practices

Use for global error logging.

Handle common error cases (401, 500).

Avoid complex UI logic inside interceptor.

---

## 6. Common Mistakes

Handling UI inside interceptor.

Suppressing errors incorrectly.

Overcomplicating error logic.

---

## 7. Interview Questions

What is an error interceptor?

How does it differ from catchError in services?

When should you use an interceptor for error handling?
