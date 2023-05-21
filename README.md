# NoBraketsCalculator
this is an exercise where a basic calculator performs aritmetic calculations with a different sintax that allows to avoid the use of brackets.

It accept a string formats where the operators are put before the operands, separating the mumbers and operators by space characters in this way: 

calculator's accepted notation: + 5 2
Calculatro's return traditional format: 5 + 2

Such a script makes the use of parentheses not needed even for more complex expression such as the following examples:

Accepted notation | traditional notation

5 + 2             |  + 5 2
2 + (4 / 3)       |  + / 2 4 3
(2 + 4) * 3)      |  * + 2 4 3
(2 - 5) * (4 + 3) |  * - 2 5 + 4 3

all the calculation is done by the finction calc() included in the calculator file.
the index.hdml can be loaded to try the function in the browser
