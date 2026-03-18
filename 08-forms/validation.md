# Form Validation

## 1. Concept

Validation ensures that user input meets specific rules before submission.

Angular supports:

* built-in validation
* custom validation

---

## 2. Built-in Validators

Angular provides common validators:

```typescript
import { Validators } from '@angular/forms';

form = this.fb.group({
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]]
});
```

---

## 3. Template Form Validation

```html
<input name="email" ngModel required email>
```

---

## 4. Displaying Errors

```html
<div *ngIf="form.get('email')?.invalid">
  Invalid email
</div>
```

---

## 5. Custom Validator

Example:

```typescript
function customValidator(control) {
  if (control.value === 'admin') {
    return { notAllowed: true };
  }
  return null;
}
```

Usage:

```typescript
username: ['', customValidator]
```

---

## 6. Real Project Usage

Used in:

* login form validation
* order creation validation
* ensuring correct data before API calls

---

## 7. Best Practices

Use validation before API calls.

Provide user-friendly error messages.

Keep validation logic reusable.

---

## 8. Common Mistakes

Not validating input before submission.

Showing errors too early.

Hardcoding validation logic.

---

## 9. Interview Questions

What is form validation?

What are built-in validators in Angular?

How do you create a custom validator?

Difference between template and reactive form validation?
