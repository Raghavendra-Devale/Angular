# HTTP Interceptors

This chapter explains how Angular intercepts and modifies HTTP requests and responses globally.

Interceptors act as middleware between the Angular application and backend APIs.

---

## Topics Covered

* [HTTP Interceptors Overview](./http-interceptors.md)
* [Auth Interceptor](./auth-interceptor.md)
* [Error Interceptor](./error-interceptor.md)

---

## Why Interceptors Matter

In real applications, many operations must happen for every request:

* attaching authentication tokens
* handling errors globally
* logging requests and responses

Instead of repeating logic in every service, interceptors centralize this behavior.

---

## Flow

```id="p9zqk1"
Component
   ↓
Service
   ↓
Interceptor
   ↓
Backend API
   ↓
Interceptor
   ↓
Response
   ↓
Component
```

Interceptors sit in the middle and modify requests/responses.
