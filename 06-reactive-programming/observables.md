# Observables

## 1. Concept

An Observable is a stream of data that can emit multiple values over time.

Unlike normal variables, observables can:

* emit values asynchronously
* emit multiple values
* be cancelled using unsubscribe

---

## 2. Sync vs Async Behavior

Synchronous example:

```typescript id="k3k9cv"
console.log("A");
console.log("B");
```

Output:

```id="x9zq3l"
A
B
```

---

Asynchronous example:

```typescript id="k2z8l1"
setTimeout(() => {
  console.log("A");
}, 1000);

console.log("B");
```

Output:

```id="7y7u7m"
B
A
```

Observables behave asynchronously by default.

---

## 3. Creating an Observable

```typescript id="s3r9k2"
import { Observable } from 'rxjs';

const number$ = new Observable(observer => {
  observer.next(100);
  observer.next(200);
  observer.next(300);
});
```

---

## 4. Subscribing to an Observable

```typescript id="6k2z9l"
number$.subscribe(value => {
  console.log(value);
});
```

Output:

```id="9z3k1m"
100
200
300
```

---

## 5. Subscription Lifecycle

Observables have a lifecycle:

* next → emits data
* error → emits error
* complete → finishes stream

---

## 6. Real Project Usage

HttpClient returns observables.

```typescript id="g8p2k1"
this.http.get('/api/data')
```

Component subscribes to receive data:

```typescript id="j2p8s4"
.subscribe(data => this.data = data);
```

---

## 7. Best Practices

Always unsubscribe from long-lived observables.

Use async pipe when possible.

Keep observable streams clean.

---

## 8. Common Mistakes

Forgetting to unsubscribe.

Confusing observables with promises.

Not understanding async behavior.

---

## 9. Interview Questions

What is an Observable?

How is it different from a Promise?

What is subscription?

What is the observable lifecycle?
