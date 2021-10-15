# Part 2. A Little More of a Challenge...
## var, let, const
1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    - 3
    - ```i``` is declared within the scope of function discountPrices. Even thgouh we are done with the for-loop, line 12 is within the same function scope. Therefore, we can still access the value of var ```i``` and ```console.log``` it.
2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    - 150
    - = 300 * (1-0.5)
    - ```discountedPrice``` is declared within the scope of function discountPrices. Even thgouh we are done with the for-loop, line 13 is within the same function scope. Therefore, we can still access the value of var ```discountedPrice``` and console.log it.
3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    - 150
    - = Math.round(150 * 100) / 100
    - ```finalPrice``` is declared within the scope of function ```discountPrices```. Even thgouh we are done with the for-loop, line 13 is within the same function scope. Therefore, we can still access the value of var ```finalPrice``` and console.log it.
4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
    - [50, 100, 150]
    - Within the for-loop, we calculate the ```finalPrice``` for each element in ```prices```, then appends it into the array ```discounted```. Finally, the function returns the array ```discounted```.
5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    - Error. Since ```i``` is defined within the for-loop block scope, line 12 is out of that block scope. THerefore, the program returns an error of undefined.
6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    - Error. Since ```discountedPrice``` is defined within the for-loop block scope, line 12 is out of that block scope. THerefore, the program returns an error of undefined.
7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    - 150
    - = Math.round(150 * 100) / 100
    - Since ```finalPrice``` is difined within the block scope of function ```discountPrices``` and line 14 is within the same block scope, we still have access to ```finalPrice``` on line 14.
8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    - [50, 100, 150]
    - Within the for-loop, we calculate the ```finalPrice``` for each element in ```prices```, then appends it into the array ```discounted```. Finally, the function returns the array ```discounted```.
9.  ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
    - Error. Since ```i``` is defined within the for-loop block scope, line 12 is out of that block scope. THerefore, the program returns an error of undefined.

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    - 3
    - On line 4, we assigns the length of prices (3) to ```length```. Since line 12 is still in the same block scope (function ```discountPrices```), we still have access to ```length```. And therefore, it ```console.log``` ```length``` and prints a 3.
11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    - [50, 100, 150]
    - Within the for-loop, we calculate the ```discountedPrice``` for each element in ```prices```, then appends it into the array ```discounted```. Finally, the function returns the array ```discounted```.

## Data Types
12. Given the above Object, write the notation for:  (These should be in your part2.md)
    - A. Accessing the value of the name property in the student object
      - ```student.name```
    - B. Accessing the value of the Grad Year property in the student object
      - ```student['Grad Year']```
    - C. Calling the function for the greeting property in the student object
      - ```student.greeting();```
    - D. Accessing the name property of the object in the Favorite Teacher property in student
      - ```student['Favorite Teacher'].name```
    - E. Access the first index in the array of the courseLoad property of the student object
      - ```student.courseLoad[0]```

## Basic Operators & Type Conversion

13. Arithmetic
    ```
    A. '3'+2            --> '32'
        - 2 is converted to string '2'
    B. '3'-2            --> 1
        - '3' (string) is converted to integer 3
    C. 3+null           --> 3
        - null is converted to integer 0
    D. '3'+null         --> '3null'
        - null is converted to string 'null'
    E. true+3           --> 4
        - true is converted to integer 1
    F. false+null       --> 0
        - both false and null are converted to integer 0
    G. '3'+undefined    --> '3undefined'
        - undefined is converted to string 'undefined'
    H. '3'-undefined    --> NaN
        - when subtration with undefined, it returns NaN, rather than converting undefined to 0
    ```

14. Comparison
    ```
    A. '2' > 1              --> true
        - '2' is converted to int 2
    B. '2' < '12'           --> false
        - by comparing the first character, we know that '2' is less than '1' (ascii indexing)
    C. 2 == '2'             --> true
        - both are 2, and types are ignored
    D. 2 === '2'            --> false
        - since === is being used here, types are considered
        - so 2 (int) is not equal to '2' (string)
    E. true == 2            --> false
        - true is considered as 1, so not equals to 2
    F. true === Boolean(2)  --> true
        - Boolean(2) would return true (any number other than 0 returns true), and true is equal to true
    ```

15. Explain the difference between the == and === operators.
    - ```===``` is the strict equality operator, where ```==``` is the equality operator
    - Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
    - For example, in q14c and q14d above, we can see ```==``` doesn't take their types into consideration and returns true. However, with ```===``` in q14d, it considers the types of both operands. Therefore, it returns false as one is ```int``` and the other one is a ```string```.

## Loops

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file ```part2-question16.js```)

## Functions

17. If the function above is called with the following parameters ```modifyArray([1,2,3], doSomething)```, what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    - returns ```[2,4,6]```
    - In the function ```modifyArray```, we loop through every elements in ```array```, run function ```callback``` on the elements, and push them to ```newArray```. In our case, ```callback``` returns the input multiplied by 2. Therefore, we would receive an array of all elements multiplied by 2.

## setInterval(), setTimeout(), clearTimeout()

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - ```part2-question18.js```)

19. What is the output of the above code? (This should be in your part2.md)
    - 1
    - 4
    - 3
    - 2

