# Reusable Components

## 1. Concept

Reusable components are components designed to be used in multiple places across the application.

They are generic and configurable.

Instead of hardcoding values, they accept data through inputs.

---

## 2. Why Angular Uses Reusable Components

Without reusable components:

* UI code gets duplicated
* changes become difficult
* inconsistency increases

Reusable components promote DRY (Don't Repeat Yourself) principle.

---

## 3. Example

Reusable button component

```typescript id="4kq3sd"
@Component({
  selector: 'app-button',
  template: `<button>{{ label }}</button>`
})
export class ButtonComponent {
  @Input() label: string = '';
}
```

Usage

```html id="xk5o9d"
<app-button label="Save"></app-button>
<app-button label="Cancel"></app-button>
```

---

## 4. Using Inputs for Flexibility

```typescript id="9sk2df"
@Input() type: string = 'primary';
```

This allows the same component to behave differently.

---

## 5. Real Project Usage

Examples:

* reusable buttons
* form input fields
* cards for dashboard data
* table components

Instead of repeating HTML, one component is reused.

---

## 6. Best Practices

Keep reusable components generic.

Use `@Input()` for configuration.

Avoid business logic inside reusable components.

---

## 7. Common Mistakes

Making components too specific.

Hardcoding values instead of using inputs.

Adding too much logic inside reusable components.

---

## 8. Interview Questions

What is a reusable component?

Why are reusable components important?

How do you pass data to a reusable component?

What is `@Input()` used for?
