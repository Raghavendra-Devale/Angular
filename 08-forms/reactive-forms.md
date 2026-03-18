# Reactive Forms

## 1. Concept

Reactive forms define form structure and logic inside the component using TypeScript.

They use:

* FormGroup
* FormControl
* FormBuilder

Forms are created programmatically.

---

## 2. Why Angular Uses Reactive Forms

Reactive forms provide:

* better control
* scalability
* easier testing
* dynamic form creation

They are suitable for complex applications.

---

## 3. Example

Component:

```typescript
import { FormGroup, FormControl } from '@angular/forms';

form = new FormGroup({
  username: new FormControl('')
});
```

Template:

```html
<form [formGroup]="form">
  <input formControlName="username">
</form>
```

---

## 4. Using FormBuilder

```typescript
import { FormBuilder } from '@angular/forms';

constructor(private fb: FormBuilder) {}

form = this.fb.group({
  username: ['']
});
```

---

## 5. Real Project Usage

Used for:

* add/edit order page
* forms with validation
* complex user input handling

---

## 6. Best Practices

Use reactive forms for complex forms.

Keep form logic inside component.

Use FormBuilder for cleaner code.

---

## 7. Common Mistakes

Mixing template-driven and reactive forms.

Not initializing form properly.

Accessing form controls incorrectly.

---

## 8. Interview Questions

What is a reactive form?

What is FormGroup?

What is FormControl?

Difference between reactive and template-driven forms?
