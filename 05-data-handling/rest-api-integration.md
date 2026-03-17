# REST API Integration

## Concept

Angular applications commonly communicate with backend systems using **REST APIs**.

REST (Representational State Transfer) is a standard architecture for designing web services.

REST APIs expose endpoints that return data in formats such as JSON.

---

## Why Angular Uses REST APIs

Frontend applications need data to display content.

REST APIs allow Angular applications to:

* retrieve data
* create new records
* update existing records
* delete resources

---

## Example API Endpoints

Example endpoints for an order system:

```
GET /api/orders
POST /api/orders
PUT /api/orders/:id
DELETE /api/orders/:id
```

Angular services call these endpoints using HttpClient.

---

## Example Service Integration

```typescript
getOrders() {
  return this.http.get('/api/orders');
}

createOrder(order) {
  return this.http.post('/api/orders', order);
}
```

---

## Real Project Usage

In the dashboard project:

The backend returns a summary object.

Example response:

```
dashboardSummary {
  botiq_order: [],
  master_table: [],
  org_settings: [],
  botiq_partner: [],
  botiq_customer: []
}
```

Angular reads this object and displays counts in the UI.

---

## Best Practices

Define TypeScript interfaces for API responses.

Handle API errors gracefully.

Keep API logic inside services.

---

## Common Mistakes

Hardcoding API URLs in components.

Ignoring API response structure.

Not validating API data before using it.

---

## Interview Questions

What is a REST API?

How does Angular communicate with backend APIs?

Where should API calls be placed in Angular applications?

Why are interfaces useful when working with APIs?
