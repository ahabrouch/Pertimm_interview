# the solution for Node JS - Algo Exercise

The algorithm consists of finding the index of the zero to be replaced in order  to obtain the longest sequence of ones, given an array of zeros and ones as an argument.

## To run the main script of the algorithm (algorithm.js) you need to run run.js
```bash
node run.js 1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1
```
This command should return in the console  the result which is the index of the zero to be replaced.

```bash
The index of the 0 to be replaced is : 10
```
____________________________________________________________________________________________________

### Run test cases
```bash
node test.js 
```

### This command runs the algorithm for all provided test cases.
```bash
Array number : 0
[ 1, 0, 0, 1 ]
the index to be replaced is : 2
-----------------------------------------------
Array number : 1
[ 1, 0, 0, 0 ]
the index to be replaced is : 1
-----------------------------------------------
Array number : 2
[ 0, 0, 0, 0 ]
the index to be replaced is : 3
-----------------------------------------------
Array number : 3
[ 0, 1, 0, 1, 0, 1 ]
the index to be replaced is : 4
-----------------------------------------------
Array number : 4
[ 0, 0, 0, 0, 0, 1 ]
the index to be replaced is : 4
-----------------------------------------------
Array number : 5
[ 0, 0, 0, 0, 1, 1 ]
the index to be replaced is : 3
-----------------------------------------------
Array number : 6
[ 0, 0, 0, 1, 0, 1 ]
the index to be replaced is : 4
-----------------------------------------------
Array number : 7
[
  1, 1, 0, 1,
  1, 0, 1, 1
]
the index to be replaced is : 5
-----------------------------------------------
Array number : 8
[
  1, 1, 1, 0, 0,
  1, 0, 0, 1, 1
]
the index to be replaced is : 3
-----------------------------------------------
Array number : 9
[
  1, 1, 1, 0, 1,
  1, 0, 1, 1, 1
]
the index to be replaced is : 6
-----------------------------------------------
Array number : 10
[
  1, 0, 1, 1, 1, 0, 1,
  1, 1, 1, 0, 1, 1, 1,
  1, 0, 0, 1, 1
]
the index to be replaced is : 10
-----------------------------------------------
```
