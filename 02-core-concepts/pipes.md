# Angular Pipes

## Concept

Pipes transform data before displaying it in the template.

They allow formatting of values without modifying the original data.

---

## Why Angular Uses Pipes

Instead of writing formatting logic inside templates, pipes allow reusable transformations.

This keeps templates clean and readable.

---

## Example

Format text

```html
{{ username | uppercase }}
```

Format date

```html
{{ today | date }}
```

Format currency

```html
{{ price | currency }}
```

---

## Real Project Usage

Example

```html
{{ order.createdDate | date }}
```

Displays a formatted date instead of raw timestamp.

---

## Best Practices

Use pipes for display formatting.

Avoid heavy calculations inside pipes.

Use custom pipes when formatting logic is reused.

---

## Common Mistakes

Using pipes for complex business logic.

Overusing pipes inside large lists.

---

## Interview Questions

What is an Angular pipe?

Why are pipes used in Angular?

Name some built-in Angular pipes.

What is the difference between pure and impure pipes?
