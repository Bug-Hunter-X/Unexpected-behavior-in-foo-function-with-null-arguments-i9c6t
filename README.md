# Unexpected behavior in foo function with null arguments

This repository demonstrates an uncommon bug in JavaScript related to unexpected behavior when null values are passed as arguments to a function. The `foo` function is expected to return the sum of its two numerical arguments, but it unexpectedly returns 0 when one or both arguments are null.

The bug is demonstrated in `bug.js`, and the solution is provided in `bugSolution.js`. The solution handles null values gracefully, returning `NaN` as expected for null inputs, using a more robust check for null values. 

## How to reproduce

Clone this repository and run `bug.js`. You will observe the unexpected behavior of the `foo` function when null values are passed as arguments.

## Solution

The solution, located in `bugSolution.js`, addresses the issue by using `Number.isNaN()` to check for null values appropriately and returning NaN when a null value is encountered. This ensures consistent behavior and prevents unexpected results.