# Code Next - Intro

This is a lesson for the [Code Next](https://codenext.withgoogle.com/) React club.

[Fork on StackBlitz ⚡️](https://stackblitz.com/fork/code-next-intro)

In this lesson, engineers will

- learn JavaScript basics
- build a counter component in plain JavaScript
- learn how to bootstrap a React app
- build a counter component in React
- understand the problem that React solves

## LECTURE: JavaScript basics

JavaScript is a programming language that adds dynamic capabilities to a website. Some of the content in this section was adapted from [MDN's JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics).

### Variables

Variables store values. They are declared with the `let` or `const` keywords.

```js
let foo = 'foo';
const bar = 'bar';
```

Use `let` if you plan to _reassign_ the variable in the same context. Otherwise, use `const`. You will typically use `const` more than `let`.

```js
// GOOD: used let when variable reassigned
let foo = 'foo1';
foo = 'foo2';

// GOOD: used const when variable not reassigned
const baz = 'baz';

// BAD: used let when variable not reassigned
let bar = 'bar';
```

It is possible to create a variable without using `const` or `let`, but this will put a reassignable variable in the global context.

["Why are global variables bad?"](https://dev.to/mervinsv/why-global-variables-are-bad-4pj)

```js
// BAD: any context can reassign this!
foo = 'foo';
```

### Primitives

Primitive types are immutable - they cannot be changed. They are usually assigned to variables. Remember that _variables_ can be reassigned a new value, depending on the context. However, the value remains untouched.

```js
// point to 'hello' in memory
let str1 = 'hello';

// point to whatever variable str1 is currently pointing to
const str2 = str1;

// reassign str1 to point 'goodbye' in memory
str1 = 'goodbye';

// 'hello' never changed, str1 is just pointing at a new object
console.log(str1); // goodbye

// we never told str2 to point somewhere else, so it's still pointing to 'hello'
console.log(str2); // hello
```

The primitive types are: `String`, `Boolean`, `null`, `undefined`, `Number`, `Symbol`, and `BigInt`.

```js
const arrayOfCharacters = 'hello world!'; // String
const trueOrFalse = true; // Boolean
const explicitAbsenceOfAValue = null; // null
const variableDeclaredButNotAssignedYet = undefined; // undefined
const countThings = 5; // Number
const symbol = Symbol('hello'); // Symbol
const largeNumber = BigInt(9007199254740991) // BigInt
```

For now, don't worry about symbols. If you want to learn about them, see [this MDN article](https://developer.mozilla.org/en-US/docs/Glossary/Symbol).

To learn the subtle differences between `null` and `undefined`, see [this StackOverflow question](https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript).

### Objects

Objects map keys to values.

```js
const o = {
  hello: 'world',
  lol: 'lol'
};

console.log(o.hello) // world
console.log(o['hello']) // world
console.log(o.goodbye) // undefined
```

Values can be objects, too!

```js
const o = {
  whats: {
    my: {
      secret: '👌👖',
    }
  }
};

console.log(o.whats.my.secret); // 👌👖
```

Objects are mutable. A variable may be declared as constant with `const`, but the object can change.

```js
const o = {
  foo: 'foo1',
};

console.log(o); // { foo: 'foo1' }

o.foo = 'foo2';
o.bar = 'bar1';

console.log(o); // { foo: 'foo2', bar: 'bar1' }
```

Arrays are objects whose values are keyed by their index.

```js
const arr = [1, 'two', { three: 'three' }];

console.log(arr[0]); // 1
console.log(arr[1]); // two
console.log(arr[2]); // { three: 'three' }
console.log(typeof arr) // object
```

### Functions

Functions are callable _objects_. You can think of them as a subprogram in your app. They are the heart of JavaScript programming. There are a few ways to declare them:

```js
// GOOD: es6 arrow syntax with explicit return
const translate = (acronym) => {
  if (acronym === 'lol') {
    return 'laugh out loud';
  } else {
    throw new Error(`idk how to translate: '${acronym}'`);
  }
}
translate('idk') // Uncaught Error: idk how to translate: 'idk'

// OK: es6 arrow syntax with implicit return (no curly braces)
const getFavLib = () => 'react';
console.log(getFavLib()); // react

// OK: classic syntax
function greet(name) {
  console.log(`Hey, ${name}.`);
}
greet('Jared') // Hey, Jared.

// BAD: es6 arrow syntax implicit return with curly braces
const getFavLang = () => {
  'TypeScript'; // need an explicit return here, or remove curly braces
};
console.log(getFavLang()) // undefined
```

In this course, we will almost always use the [es6 arrow syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Since functions are objects, they can be passed as arguments to other functions. This is useful for composing behavior, instead of having one giant function doing everything.

```js
const getLie = () => 'this is boring no cap';

const getTruth = () => 'this is cool no cap';

const scream = (getMessage) => {
  console.log(getMessage().toUpperCase());
};

// IMPORTANT: I didn't invoke getLie and getTruth!!!
scream(getLie); // THIS IS BORING NO CAP
scream(getTruth); // THIS IS COOL NO CAP

// If you invoke a function and pass it to something expecting a function, you will get an error, because it is whatever the function evaluates to!!!
scream(getLie()); // Uncaught TypeError: getMessage is not a function
```

Functions can return functions. This is useful for deferring computations and composing behavior.

```js
// Instead of a sum, imagine an expensive computation. You might want to do that in the background.
const deferredSum = (a, b) => {  
  return () => a + b;
}
const getSum = deferredSum(1, 2);
console.log(getSum()); // 3

// We can compose functions, too!
const sum = (a) => (b) => a + b;
const addOne = sum(1);
const addFive = sum(5);

console.log(addOne(1)); // 2
console.log(addFive(1)); // 6
```

Functions can be anonymous (not explicitly named in the current context).

```js
const objects = [
  { foo: 'foo' },
  { foo: 'bar' },
  { baz: 'baz' },
  { foo: 'bar', baz: 'baz' },
];
const fooBarObject = objects.find((obj) => obj.foo === 'bar');
console.log(fooBarObject); // { foo: 'bar' }
```

## YOUR TURN: Counter component 

Create a counter component in plain JavaScript. A counter is composed of 3 behaviors:

- A display that shows the user what the `count` is at. The `count` should be initialized at 0. 
- A decrement button that subtracts 1 from the current `count` and updates the display.
- An increment button that adds 1 to the current `count` and updates the display.

Ultimately, it will look like this:

<div>
  <div>count: 0</div>
  <div>
    <button>increment</button>
    <button>decrement</button>
  </div>
</div>

<hr/>

### Helpful Patterns

#### Setting Inner Text of Element

_html_

```html
<div>
  count: <span id="count">0</span>
</div>
```

_js_
```js
// get the element that has [id="count"]
const countSpan = document.getElementById('count');

// updates the inner text immediately
countSpan.innerText = 42;
```

#### Adding an Event Listener

_html_
```html
<button id="increment">increment</button>
```

_js_
```js
// declare a mutable variable called `count` and initialize it to 0
let count = 0;

// get the element that has [id="increment"]
const incrementButton = document.getElementById('increment');

// when the button is clicked, invoke a function that increments count
incrementButton.onclick = () => {
  count++
  // you'll need to do something else to update the count display
}
```

### Reflection

- What was difficult about creating a counter component in plain JavaScript?
- What are the things we were responsible of keeping track of?

## LECTURE: Introducing React

We have a rough idea of how to create a web application using plain JavaScript. However, we can see that it is cumbersome to track internal state and what the user sees. We also have to come up with our own strategies for making DOM updates efficient.

React solves these problems for us. As long as we do things the "React way", React will make updates to the DOM for us in an efficient manner. All we have to do is manage the app state according to our specifications.

## YOUR TURN: Bootstrapping a React App

Boostrapping refers to the way our React App will start. It should not require the user to activate it - our code should do the activation / initialization.

First, let's mark the element that will contain our React application using the id attribute.

_public/index.html_

```html
<div id="react-app"></div>
```

Then, let's make a simple React component.

_src/App.js_

```jsx
import React from 'react';

export const App = () => <div>Hello, from the App!</div>
```

Next, let's import the App and React stuff that will help us bootstrap the app.

_index.js_
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('react-app'));
```

If done correctly, you should see  "Hello, from the App!" rendered in the DOM.

### Reflection

- What does it mean to boostrap a React app?
- Can you have other HTML elements next to a React app?
- What would happen if we didn't call `ReactDOM.render`?

## YOUR TURN: React Counter component

Now that we know how to boostrap a React app, let's see how easier it would be to create a counter component using React.

First, create a `Counter` component.

_src/Counter.js_

```jsx
import React from 'react';

export const Counter = () => {
  return <div>count:</div>
}
```

Then, import it in the App component and render it.

_src/App.js_

```jsx
import { Counter } from './Counter';

export const App = () => <Counter />;
```

The reason why we do this is to separate the concerns of the App component and the Counter component. Our App component orchestrates the layout of our top-level components and does some initialization. Our Counter component keeps track of a count variable.

React provides a hook called `useState`, which is React's mechanism for tracking state. You give it an initial value, and it'll give you a reference to the state, and a way to update it.

_src/Counter.js_

```jsx
import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return <div>count: {count}</div>
}
```

Notice the special curly braces `{}` syntax _inside the JSX template_. You can put JavaScript expressions in these curly braces, and they will be injected into the template.

If done correctly, you should see "count: 0". What happens if you call `useState(123)`? Before you try this, think of your answer first.

`useState` also gave us a `setCount` function. We must use this function to update the state, or React won't know about it.

Let's add an increment button and use `setCount` in the button's `onClick` prop.

```jsx
import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>
          increment
        </button>
      </div>
    </div>
  );
}
```

Does it work as expected?

Finally, create a decrement button and install a click handler on it.

### Reflection

- Why do we have to use `React.useState`?
- What does React do under-the-hood for us?
