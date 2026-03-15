# Component Communication

## Concept

Component communication refers to the way data is passed between components in an Angular application.

Since Angular applications are built using many components, they often need to exchange information.

There are several common communication patterns.

---

## Parent to Child Communication

Parent components pass data to child components using **Input properties**.

Example

```typescript id="fj02cx"
@Input() title: string;
```

Parent template

```html id="0b6c8g"
<app-child [title]="pageTitle"></app-child>
```

---

## Child to Parent Communication

Child components send data back to the parent using **EventEmitter**.

Example

```typescript id="2sp41l"
@Output() save = new EventEmitter();
```

Child component

```typescript id="s83cfs"
this.save.emit(data);
```

Parent listens for the event

```html id="g78tgj"
<app-child (save)="handleSave($event)"></app-child>
```

---

## Communication Using Services

When components are not directly related, services are often used to share data.

Example

Component A → Service → Component B

This pattern is useful for shared state or global data.

---

## Real Project Usage

Example scenario:

OrderListComponent
→ displays list of orders

AddOrderComponent
→ creates new order

Both components may communicate through OrderService.

---

## Best Practices

Use Input and Output for parent-child communication.

Use services for communication between unrelated components.

Avoid complex communication chains.

---

## Common Mistakes

Using services unnecessarily for simple parent-child communication.

Overcomplicating component relationships.

Not clearly defining data flow.

---

## Interview Questions

How do components communicate in Angular?

What is `@Input()` in Angular?

What is `@Output()` in Angular?

When should services be used for component communication?
