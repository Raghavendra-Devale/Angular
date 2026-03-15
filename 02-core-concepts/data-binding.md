# Angular Data Binding

## Concept

Data binding connects the **component logic and the template UI**.

It allows data to flow between the component and the view.

Angular supports four types of data binding.

---

## Types of Data Binding

### Interpolation

Displays component data in the template.

```html
<h1>{{ title }}</h1>
```

---

### Property Binding

Binds component data to an HTML property.

```html
<img [src]="imageUrl">
```

---

### Event Binding

Handles user actions.

```html
<button (click)="saveOrder()">Save</button>
```

---

### Two-Way Binding

Synchronizes data between the UI and the component.

```html
<input [(ngModel)]="username">
```

---

## Real Project Usage

Example in order form

```html
<input [(ngModel)]="order.name">
```

User input automatically updates the component property.

---

## Best Practices

Use interpolation for displaying data.

Use property binding for element properties.

Avoid unnecessary two-way binding when one-way binding is enough.

---

## Common Mistakes

Confusing property binding and interpolation.

Using two-way binding everywhere.

Creating complex expressions inside bindings.

---

## Interview Questions

What is data binding in Angular?

What are the four types of data binding?

What is the difference between property binding and event binding?

What is two-way data binding?
