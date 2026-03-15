# Application Architecture

This chapter explains how Angular applications organize business logic and communication between different parts of the application.

In real-world Angular projects, components should remain lightweight and focus mainly on UI logic.

Reusable logic, API communication, and shared state are typically handled using services and dependency injection.

---

## Topics Covered

* [Services](./services.md)
* [Dependency Injection](./dependency-injection.md)
* [Component Communication](./component-communication.md)

---

## Why This Chapter Matters

Without proper architecture, Angular applications quickly become difficult to maintain.

Angular solves this by separating responsibilities:

Components → UI logic
Services → business logic and API calls
Dependency Injection → manages how services are shared
Component Communication → allows components to exchange data

These concepts form the backbone of scalable Angular applications.
