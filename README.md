# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @valempire/lotide`

**Require it:**

`const _ = require('@valempire/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

### * `head([arr])` : Accepts array as an argument and returns its first element.
```javascript
head([]) => undefined;
head([1]) => 1;
head([4,2,3,6]) => 4;
head("notArr") => undefined;
```
### * `middle([arr])` : Accepts array as an argument and return its middle element
```javascript
//Returns an empty array for arrays with equal to or less than two element
middle([]) => [];
middle([1]) => [];
middle([1,2]) => [];

// Returns a single middle element for array with odd number of elements. 
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

// Returns an array containing the two elements in the middle for array with even number of elements.
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
```
### * `tail([arr])` : Returns everything except the first element of the provided array.
```javascript
// Original array still have 3 elements!
const words = ["Yo Yo", "Lighthouse", "Labs", "Val"];
tail(words) => ["Lighthouse", "Labs", "Val"];
words.length === 3;

// Returns undefined for arrays with length less than or equal to 1
tail(["lorem"]) => undefined;
tail([]) => undefined;
```