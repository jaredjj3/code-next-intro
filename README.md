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
// GOOD: used `let` when variable reassigned
let foo = 'foo1';
foo = 'foo2';

// GOOD: used `const` when variable not reassigned
const baz = 'baz';

// BAD: used `let` when variable not reassigned
let bar = 'bar';
```

It is possible to create a variable without using `const` or `let`, but this will put a reassignable variable in the global context.

["Why are global variables bad?"](https://dev.to/mervinsv/why-global-variables-are-bad-4pj)

```js
// BAD: any context can reassign this!
foo = 'foo';
```
