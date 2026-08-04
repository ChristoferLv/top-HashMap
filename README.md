# HashMap

Data structure project developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), focused on manually implementing a HashMap with collision handling.

## Project Objective

The main objective was to practice:
- Implementing a hash function for string keys
- Bucket storage with array chaining
- Insertion, lookup, and removal operations
- Load factor control and automatic resizing
- Exposing stored keys, values, and entries

## What is it?

An implementation of a `HashMap` class in JavaScript with internal bucket storage and collision resolution through lists inside each index.

When the load factor exceeds the defined limit, the map doubles its capacity and reinserts the key/value pairs to maintain distribution.

## How to use

1. Enter the project folder:
   `Javascript/top-HashMap`
2. Run the demo file:
   `node index.js`

## Features

- **`hash(key)`**: calculates the key index
- **`set(key, value)`**: adds or updates a key/value pair
- **`get(key)`**: returns the key value or `null`
- **`has(key)`**: checks whether the key exists
- **`remove(key)`**: removes a key and returns `true` or `false` depending on the result
- **`length`**: current number of stored pairs
- **`clear()`**: completely clears the map
- **`keys`**: returns the stored keys
- **`values`**: returns the stored values
- **`entries`**: returns the stored key/value pairs

## File Structure

- `HashMap.js`: implementation of the `HashMap` class
- `index.js`: demo script with insertions and queries

## Technologies Used

- JavaScript (ES Modules)

---

Project developed following: [The Odin Project - HashMap](https://www.theodinproject.com/lessons/javascript-hashmap)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
