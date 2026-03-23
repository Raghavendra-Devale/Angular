# Content Projection

## 1. Concept

Content projection allows a component to accept dynamic content from its parent.

It is done using `<ng-content>`.

Instead of passing only data, entire HTML can be passed inside a component.

---

## 2. Why Angular Uses Content Projection

Reusable components sometimes need flexible layouts.

Example:

A card component where content changes:

* title
* body
* footer

Instead of creating multiple components, content projection allows dynamic content.

---

## 3. Basic Example

Child component

```html id="p6qk2r"
<div class="card">
  <ng-content></ng-content>
</div>
```

Parent usage

```html id="m9r2kp"
<app-card>
  <h2>Title</h2>
  <p>This is card content</p>
</app-card>
```

The content inside `<app-card>` is projected into `<ng-content>`.

---

## 4. Multiple Slots (Advanced Basic)

```html id="z8p3lq"
<ng-content select="[header]"></ng-content>
<ng-content select="[body]"></ng-content>
```

Usage

```html id="u7x2vn"
<app-card>
  <div header>Header Content</div>
  <div body>Main Content</div>
</app-card>
```

---

## 5. Real Project Usage

Used for:

* reusable card layouts
* modal components
* layout wrappers

Example:

Dashboard cards with dynamic content.

---

## 6. Best Practices

Use content projection for flexible layouts.

Combine with reusable components.

Keep projected structure simple.

---

## 7. Common Mistakes

Overcomplicating projected layouts.

Using inputs instead of projection when HTML is needed.

Not understanding content vs data passing.

---

## 8. Interview Questions

What is content projection?

What is `<ng-content>`?

What is the difference between `@Input()` and content projection?

When should content projection be used?
