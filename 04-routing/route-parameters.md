# Route Parameters

## Concept

Route parameters allow dynamic values to be passed through the URL.

They are commonly used to display data for a specific item such as a user, order, or product.

---

## Why Angular Uses Route Parameters

Applications often need to load specific data based on the URL.

Example scenarios:

* View a specific order
* View user profile
* Edit an item

Route parameters allow the component to read values from the URL.

---

## Example Route Configuration

```typescript
{
  path: 'orders/:id',
  component: OrderDetailsComponent
}
```

Here `:id` is a dynamic parameter.

Example URL

```
/orders/101
```

---

## Accessing Route Parameters

In the component:

```typescript
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const orderId = this.route.snapshot.params['id'];
}
```

The component can now load data based on the parameter.

---

## Real Project Usage

Example:

Edit order page

```
/orders/edit/45
```

The component reads the order ID and loads that order from the API.

---

## Best Practices

Use descriptive parameter names.

Validate parameters before using them.

Use route parameters for resource identification.

---

## Common Mistakes

Not validating parameter values.

Reloading data unnecessarily when parameters change.

Hardcoding values instead of reading from route.

---

## Interview Questions

What are route parameters?

How do you define dynamic routes in Angular?

How can a component access route parameters?

What is `ActivatedRoute` used for?
