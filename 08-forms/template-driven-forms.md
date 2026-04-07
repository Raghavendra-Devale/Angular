# Template Driven Forms (ngModel)

## 1. Concept

Template-driven forms use Angular directives inside the template to handle form logic.

They rely on:

* `ngModel`
* HTML form elements
* two-way data binding

The form structure is mostly defined in the template.

---

## 2. Why Angular Uses Template Forms

Template-driven forms are simple and easy to use.

They are suitable for:

* small forms
* simple input handling
* quick development

---

## 3. Example

```html
<form #form="ngForm">
  <input name="username" [(ngModel)]="user.name">
</form>
```

Component:

```typescript
user = {
  name: ''
};
```

---

## 4. Two-Way Binding

```html
<input [(ngModel)]="user.name">
```

This keeps component and UI in sync.

---

## 5. Real Project Usage

Used for simple forms like:

* login input
* small data entry fields

---

## 6. Best Practices

Use for simple forms.

Always provide `name` attribute.

Keep logic minimal in template.

---

## 7. Common Mistakes

Forgetting `name` attribute.

Mixing reactive and template forms.

Using template forms for complex scenarios.

---

## 8. Interview Questions

What is a template-driven form?

What is `ngModel`?

What is two-way data binding?

When should template forms be used?
