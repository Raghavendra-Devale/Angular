Q1: What connects AppComponent to index.html?

Answer:

The connection is made using the component’s selector (app-root). Angular matches this selector with the corresponding HTML element in index.html and renders the component inside it.

✅ Q2: What happens if selector is changed but HTML is not updated?

Answer:

Angular will not find the matching element in the DOM, so the component will not render and the UI will appear blank.

✅ Q3: Why should we not write business logic in AppComponent?

Answer:

To maintain separation of concerns. Components should focus on UI, while services handle business logic and state management.

✅ Q4: What does AppComponent contain in a Task Manager app?

Answer:

It contains layout structure and child components like task form and task list, acting as a container for the UI.

✅ Q5: What is the biggest advantage of BehaviorSubject?

Answer:

It provides reactive state management by storing the latest value and automatically emitting updates to all subscribers.

✅ Q6: How do multiple components share the same data?

Answer:

Through a shared service. The service maintains state using BehaviorSubject, and all components subscribe to the same observable.
