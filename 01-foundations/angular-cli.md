# Angular CLI

## Concept

Angular CLI (Command Line Interface) is a tool used to create, build, and manage Angular applications.

It automates many development tasks such as:

* creating projects
* generating components
* running development servers
* building applications

---

## Why Angular Uses CLI

Without CLI tools, developers would need to manually configure:

* build tools
* TypeScript compilation
* bundlers
* project structure

Angular CLI simplifies this process and enforces best practices.

---

## Common CLI Commands

Create a new Angular project

```
ng new project-name
```

Start development server

```
ng serve
```

Generate a component

```
ng generate component component-name
```

or

```
ng g c component-name
```

Build production application

```
ng build
```

---

## Real Project Usage

In our project we use CLI to:

create components

```
ng generate component dashboard
```

generate services

```
ng generate service dashboard
```

run development server

```
ng serve
```

---

## Best Practices

Use CLI generators instead of manually creating files.

Follow Angular CLI project structure.

Use CLI commands to maintain consistency.

---

## Common Mistakes

Manually creating component files instead of using CLI.

Breaking the generated project structure.

Ignoring CLI build warnings.

---

## Interview Questions

What is Angular CLI?

What command creates a new Angular project?

How do you generate a component using CLI?

Why is Angular CLI important for development?
