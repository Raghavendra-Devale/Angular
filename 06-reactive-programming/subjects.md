# Subjects & BehaviorSubject

## 1. Concept

A Subject is a special type of Observable that allows manual control over data emission.

It can:

* emit values
* be subscribed to
* act as both observable and observer

---

## 2. Subject Example

```typescript id="3k2p1s"
import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe(data => console.log("A:", data));
subject.subscribe(data => console.log("B:", data));

subject.next(100);
subject.next(200);
```

Output:

```id="1k2p9s"
A: 100
B: 100
A: 200
B: 200
```

---

## 3. BehaviorSubject

BehaviorSubject stores the **latest value** and sends it to new subscribers.

Example:

```typescript id="9l2p1k"
import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(0);

subject.subscribe(val => console.log("A:", val));

subject.next(100);

subject.subscribe(val => console.log("B:", val));
```

Output:

```id="2p1k9s"
A: 0
A: 100
B: 100
```

---

## 4. Real Project Usage

Used for:

* sharing data between components
* storing application state
* real-time updates

Example:

AuthService stores login state using BehaviorSubject.

---

## 5. Best Practices

Use BehaviorSubject for state management.

Keep subjects private and expose as observable.

---

## 6. Common Mistakes

Exposing subjects directly.

Using subject where simple observable is enough.

Not understanding BehaviorSubject initial value.

---

## 7. Interview Questions

What is a Subject in RxJS?

What is BehaviorSubject?

What is the difference between Subject and BehaviorSubject?

When should BehaviorSubject be used?
