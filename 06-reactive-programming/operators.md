# RxJS Operators

## 1. Concept

Operators are functions used to transform or manipulate data inside an observable stream.

They allow chaining operations on data.

---

## 2. Why Operators Exist

Instead of manually processing data, operators allow declarative transformations.

Example:

Data → transform → output

---

## 3. Common Operators

### map

Transforms data.

```typescript id="2k8l1q"
map(value => value * 2)
```

---

### filter

Filters values.

```typescript id="9k2l1s"
filter(value => value > 100)
```

---

### tap

Performs side effects (logging, debugging).

```typescript id="3l9p2a"
tap(value => console.log(value))
```

---

### switchMap

Switches to a new observable and cancels previous one.

Used in API chaining.

```typescript id="1k2l9p"
switchMap(() => this.http.get('/api/data'))
```

---

## 4. Example

```typescript id="8p2k1l"
number$
  .pipe(
    filter(x => x > 100),
    map(x => x * 2)
  )
  .subscribe(console.log);
```

---

## 5. Real Project Usage

Used in API calls and chaining operations.

Example:

User action → API call → transform response → display data

---

## 6. Best Practices

Use operators to keep logic clean.

Avoid deeply nested subscriptions.

Use pipe() for chaining.

---

## 7. Common Mistakes

Not understanding operator order.

Overusing operators unnecessarily.

Using nested subscriptions instead of operators.

---

## 8. Interview Questions

What are RxJS operators?

What does map do?

What is switchMap?

Why use pipe() in Angular?
