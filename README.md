## Water jug challenge by Leandro Perez

## Description

This is a logic and algorithm challenge, the porpouse of the challenge is to create an algorithm that solves the water jug riddle that consist in three given inputs (x,y,z) which represent the capacites of three water jugs.

You have two jugs with capacities X and Y liters respectively, and you need to measure exactly Z liters of water. The riddle allows you to perform the following actions:

1. Fill a jug completely from the tap.
2. Empty a jug completely onto the ground.
3. Pour water from one jug into the other until either the pouring jug is empty or the receiving jug is full.

I've build a function that solves this riddle, you can find it in src/helpers/solveWaterJugRiddle.ts

The function returns an array of Action objects, representing the steps needed to solve the riddle. Each Action object has the following properties:

1. xValue: The amount of water in the first jug after the action.
2. yValue: The amount of water in the second jug after the action.
3. explanation: A string describing the action performed.

The function uses a breadth-first search algorithm to explore all possible states of the two jugs and find a sequence of actions that leads to the desired amount of water Z in one of the jugs. It maintains a queue of states to visit and a set of visited states to avoid revisiting the same state multiple times.

The algorithm starts with an initial state of both jugs empty `([0, 0, []])` and continues until it finds a state where either Z liters of water is in one of the jugs. At each step, it generates all possible next states by applying the allowed actions, and adds them to the queue for further exploration.

If the input parameters violate certain conditions (e.g., X, Y, or Z is zero, Z is greater than the sum of X and Y, or any of the parameters is not an integer), the function returns an empty array, indicating that it is not possible to solve the riddle with the given input.

You will find the tests for this function in src/tests/solveWaterRiddle.test.ts

Where you can check if the function:

1. returns an empty array when any value is zero
2. returns an empty array when any value is not an integer
3. returns an empty array when Z is higher than the sum of X and Y
4. returns an empty array when X, Y, or Z are equal to zero
5. returns the correct actions to solve the water jug riddle

run `npm run test` to run the tests

## Installation 

Follow these steps to install and set up the project:

1. Clone this repository: git clone https://github.com/leandroperez19/water-jug-challenge
2. Navigate to the project directory: cd water-jug-challenge
3. Install the dependencies: npm install

## Dependencies

1. `typescript`
2. `jest`
3. `testing-library`

## Utilities 

1. Github repository: `https://github.com/leandroperez19/water-jug-challenge`
2. Demo: `https://water-jug-challenge.netlify.app/`