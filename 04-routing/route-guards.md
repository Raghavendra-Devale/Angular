# Route Guards

## Concept

Route guards are used to control access to specific routes.

They determine whether a user is allowed to navigate to a particular page.

---

## Why Angular Uses Route Guards

Applications often need to restrict access to certain pages.

Examples:

* dashboard accessible only to logged-in users
* admin pages accessible only to administrators

Route guards enforce these rules.

---

## Example Guard

```typescript
import { CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {

  canActivate(): boolean {
    return true;
  }

}
```

If `true`, navigation is allowed.
If `false`, navigation is blocked.

---

## Route Configuration

```typescript
{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard]
}
```

The guard runs before the route loads.

---

## Real Project Usage

In your project:

AuthGuard checks if the user is authenticated.

If not authenticated:

Router redirects to login page.

---

## Best Practices

Use guards to protect private routes.

Keep guard logic simple.

Use authentication services inside guards.

---

## Common Mistakes

Putting authentication logic directly inside components.

Using guards for unrelated business logic.

Ignoring edge cases like token expiration.

---

## Interview Questions

What are route guards in Angular?

What is `CanActivate`?

When should route guards be used?

How does Angular prevent unauthorized access to routes?
