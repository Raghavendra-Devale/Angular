# Angular Templates

## Concept

Templates define the **HTML view of an Angular component**.

They display data from the component and respond to user interactions.

Angular templates extend HTML with special syntax for data binding and directives.

---

## Why Angular Uses Templates

Templates separate UI structure from application logic.

Component → logic
Template → UI structure

This improves code readability and maintainability.

---

## Example

Component

```typescript
export class DashboardComponent {
  title = "Dashboard";
}
```

Template

```html
<h1>{{ title }}</h1>
```

Angular replaces the interpolation expression with the value of `title`.

---

## Real Project Usage

Dashboard page displays API data using templates.

Example

```html
<div>Total Orders: {{ dashboardSummary.botiq_order.length }}</div>
```

Templates also display lists using loops.

```html
<li *ngFor="let order of orders">
  {{ order.name }}
</li>
```

---

## Best Practices

Keep templates simple.

Avoid complex logic inside templates.

Use reusable components instead of large templates.

---

## Common Mistakes

Calling functions repeatedly inside templates.

Placing heavy logic in template expressions.

Creating very large template files.

---

## Interview Questions

What is an Angular template?

What is interpolation?

How does Angular update the UI when component data changes?

What is the role of templates in Angular?
