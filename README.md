# Code Next - Intro

This is a lesson for the [Code Next](https://codenext.withgoogle.com/) React club.

[Fork on StackBlitz ⚡️](https://stackblitz.com/fork/code-next-intro)

In this lesson, engineers will

- learn JavaScript basics
- learn how to bootstrap a React app
- understand the problem that React solves

## JavaScript basics

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
