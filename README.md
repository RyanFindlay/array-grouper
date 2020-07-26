# Array Grouper

<img src="https://travis-ci.com/RyanFindlay/array-grouper.svg?branch=master">

Array Grouper splits a given array of numbers into N smaller arrays where the length of the array and N are both positive integers.

## Installation

```bash
npm i array-grouper-twig
```

## Usage

In order to use this array grouper, simply require the `groupArrayElements` method and call it as shown below.

```ts
import { groupArrayElements } from "array-grouper-twig";

var result = groupArrayElements([1, 2, 3, 4, 5], 3);
//result = [ [ 1, 2], [ 3, 4 ], [ 5 ] ]
```
