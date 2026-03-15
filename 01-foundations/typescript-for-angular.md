# TypeScript for Angular

## Concept

Angular applications are written using **TypeScript**, a strongly typed superset of JavaScript.

TypeScript adds features such as:

* static typing
* interfaces
* classes
* decorators

These features improve code maintainability and scalability.

---

## Why Angular Uses TypeScript

Large applications require better structure and error detection.

TypeScript provides:

* type safety
* better tooling
* improved code readability
* early error detection during compilation

---

## Example

TypeScript class used in Angular component

```typescript
export class DashboardComponent {

  title: string = "Dashboard";

}
```

Type annotation (`string`) ensures type safety.

---

## Common TypeScript Features Used in Angular

Classes

```
class User {}
```

Interfaces

```
interface User {
  id: number;
  name: string;
}
```

Access modifiers

```
public
private
protected
```

Decorators

```
@Component()
@Injectable()
```

---

## Real Project Usage

TypeScript is used to:

define components

```
DashboardComponent
```

define services

```
DashboardService
```

define API response interfaces

```
DashboardSummary
```

---

## Best Practices

Use interfaces for API responses.

Keep classes small and focused.

Use proper typing instead of `any`.

---

## Common Mistakes

Using `any` type everywhere.

Not defining interfaces for API responses.

Ignoring TypeScript errors.

---

## Interview Questions

Why does Angular use TypeScript?

What is an interface in TypeScript?

What is the difference between JavaScript and TypeScript?

What are decorators in Angular?
