# Event Emitter

In Angular, the **`Event Emitter`** is a mechanism that allows a child component to emit custom events and a parent component to listen for those events. This is commonly used for communication between components in a parent-child relationship. The EventEmitter class is part of the **`@angular/core`** package.

Here's a basic overview of how to use Event Emitters in Angular:

1. **Import `EventEmitter` and `Output`**:
In your child component, import **`EventEmitter`** and **`Output`** from **`@angular/core`**:

```typescript
import { EventEmitter, Output } from '@angular/core';
```

2. **Create an EventEmitter instance**:
In the child component, create an instance of **`EventEmitter`** and decorate it with **`@Output()`**:

```typescript
@Output() myEvent = new EventEmitter<any>();
```

Here, **`myEvent`** is the name of the event, and **`any`** is the type of data that will be emitted with the event. You can replace **`any`** with a more specific type if needed.

3. **Emitting the event**:
When some action occurs in the child component that you want to notify the parent about, call the **`emit`** method on the **`EventEmitter`** instance:

```typescript
this.myEvent.emit(data);
```

Here, **`data`** is the information you want to pass to the parent component.

4. **Listen for the event in the parent component**:
In the parent component's template, you can use the child component's selector to bind to the event:

```typescript
<app-child (myEvent)="handleEvent($event)"></app-child>
```

In the parent component's class, define the **`handleEvent`** method to respond to the emitted event:

```typescript
handleEvent(data: any) {
  // Do something with the emitted data
}
```

The **`$event`** variable contains the data emitted by the child component.

That's a basic overview of how to use Event Emitters in Angular. This mechanism facilitates communication between components in a clean and loosely coupled way.

# Screenshot

![2023-11-19 17-31-06](https://github.com/codewithelmor/Angular-Event-Emitter/assets/44918452/5905be8a-8e0b-426c-941b-2fd79cea31c9)

# Commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
