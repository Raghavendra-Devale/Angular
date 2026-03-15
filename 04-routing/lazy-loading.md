# Lazy Loading

## Concept

Lazy loading is a technique used to load Angular modules only when they are needed.

Instead of loading the entire application at startup, Angular loads specific modules when the user navigates to them.

---

## Why Lazy Loading Exists

Large Angular applications may contain many features.

Loading everything at once increases:

* initial load time
* bundle size

Lazy loading improves performance by loading modules only when required.

---

## Example

Route configuration using lazy loading.

```typescript
{
  path: 'orders',
  loadChildren: () =>
    import('./orders/orders.module').then(m => m.OrdersModule)
}
```

The `OrdersModule` will only load when the user visits `/orders`.

---

## Real Project Usage

Example structure

```
features
 ├── dashboard
 ├── orders
 └── customers
```

Each feature module can be lazy loaded.

This keeps the initial application bundle small.

---

## Best Practices

Lazy load large feature modules.

Group related components into feature modules.

Avoid lazy loading very small modules.

---

## Common Mistakes

Lazy loading everything unnecessarily.

Incorrect module import paths.

Misconfiguring route modules.

---

## Interview Questions

What is lazy loading in Angular?

Why is lazy loading important?

How do you configure lazy loading in Angular?

What problem does lazy loading solve?
