# Dependency Injection

## Concept

Dependency Injection (DI) is a design pattern used to provide objects or services to other parts of the application.

In Angular, DI allows components to receive services without manually creating them.

Angular's DI system automatically manages service creation and sharing.

---

## Why Angular Uses Dependency Injection

Without DI, components would need to manually create service instances.

Example without DI

```typescript id="td6e5e"
const service = new DashboardService();
```

This creates tight coupling and prevents sharing.

With DI, Angular provides the service automatically.

---

## Example

Injecting a service into a component

```typescript id="npd4l1"
constructor(private dashboardService: DashboardService) {}
```

Angular creates and injects the service instance automatically.

---

## Service Registration

Services are usually registered using:

```typescript id="0s99ib"
@Injectable({
  providedIn: 'root'
})
```

This makes the service available throughout the entire application.

---

## Real Project Usage

DashboardComponent receives DashboardService through dependency injection.

The component does not create the service.

Angular handles the service lifecycle.

---

## Best Practices

Use `providedIn: 'root'` for global services.

Inject services through the constructor.

Avoid manually creating service instances.

---

## Common Mistakes

Manually creating services using `new`.

Misunderstanding service scope.

Creating unnecessary service instances.

---

## Interview Questions

What is dependency injection?

Why does Angular use dependency injection?

How does Angular inject services into components?

What is the purpose of `providedIn: 'root'`?
