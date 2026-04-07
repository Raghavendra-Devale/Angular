# Angular Directives

## Concept

Directives are instructions that modify the behavior or structure of DOM elements.

They allow Angular to dynamically manipulate the UI.

Angular has three types of directives.

---

## Types of Directives

### Component Directives

Components themselves are directives with templates.

---

### Structural Directives

They change the structure of the DOM.

Examples

```html
*ngIf
*ngFor
```

Example

```html
<div *ngIf="isLoggedIn">
  Welcome user
</div>
```

---

### Attribute Directives

They change the appearance or behavior of elements.

Example

```html
<div [ngClass]="activeClass"></div>
```

---

## Real Project Usage

Example:

Show dashboard only if user is authenticated.

```html
<div *ngIf="isAuthenticated">
  Dashboard
</div>
```

Loop through orders.

```html
<li *ngFor="let order of orders">
  {{ order.name }}
</li>
```

---

## Best Practices

Use structural directives for conditional rendering.

Avoid too many nested directives in templates.

Create custom directives for reusable UI behavior.

---

## Common Mistakes

Confusing structural and attribute directives.

Overusing nested directives in templates.

---

## Interview Questions

What is a directive in Angular?

What are the types of directives?

What is the difference between `*ngIf` and `*ngFor`?

What is a structural directive?
