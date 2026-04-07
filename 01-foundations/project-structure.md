# Angular Project Structure

## Concept

Angular CLI generates a structured folder layout for Angular applications.

This structure helps organize components, services, and other files in a predictable way.

---

## Basic Angular Project Structure

```
src
 │
 ├── app
 │    ├── components
 │    ├── services
 │    ├── pages
 │    └── app.config.ts
 │
 ├── assets
 │
 ├── environments
 │
 └── main.ts
```

---

## Important Files

### main.ts

Entry point of the Angular application.

Angular bootstraps the root component from here.

---

### app folder

Contains the main application logic such as:

* components
* services
* routing configuration

---

### assets folder

Stores static files like:

* images
* icons
* fonts

---

### environments

Stores environment configuration such as:

development environment
production environment

---

## Real Project Usage

In our project:

```
src/app
 ├── core
 ├── features
 ├── shared
 └── layout
```

Features contain pages like dashboard.

Services handle API communication.

---

## Best Practices

Group related components into feature folders.

Separate reusable components into shared modules.

Keep project structure consistent.

---

## Common Mistakes

Placing all components inside one folder.

Mixing feature logic with shared utilities.

Not organizing code by feature.

---

## Interview Questions

What is the purpose of the src folder?

What does main.ts do in Angular?

Why is project structure important in large applications?

How should components be organized in Angular projects?
