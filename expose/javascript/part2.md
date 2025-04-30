1. 3 is printed because we are using var, so it has a global scope
2. 150 is printed because we also used var hence it is accessible outside of the for loop scope
3. it is also 150, as final price is just discounted price * 100 / 100 which is just the same value
4. This function will return an array of discounted price [50,100,150]
5. This code causes an error as i is not defined outside of the for loop, its scope is only in the for loop because we are using let
6. This code causes an error as discountedPrice was defined inside the for loop using let so it is not define outside of the for loop
7. 150 will be printed, as 150 was the last value to be assigned with finalPrice and finalPrice is defined outside of the for loop hence we can see it
8. This function will return the discounted array with the values [50,100,150]
9. This code causes an error as we try to reassign a const variable when the for loop run multiple times
10. Again, this code causes an error as we are trying to reassing a const variable in the for loop
11. This code causes an error again so it won't return anything as we tried to reassign a const variable
12. 
    a. student.name
    b. student['Grad Year']
    c. student.greeting()
    d. student['Favorite Teacher'].name
    e. student.courseload[0]
13. 
    a. '32' as 2 is converted to a string
    b. 1 as '3' was converted to a number
    c. 3 as null is treated as 0
    d. '3null' as null is treated as a string because of '3'
    e. 4 as true is treated as a number 1
    f. 0 as false is 0 and null is also 0 so 0 + 0 = 0
    g. '3undefinted' as undefined is treated as a string because of '3'
    h.  NaN as Nan is not a number so 3 - NaN is still NaN
14. 
    a. True as '2' is converted to the number 2 so 2 > 1
    b. False since it is string comparision, the first index is compared are 2 comes after 1, which means it is greater
    c. True as '2' becomes a number so 2 == 2 is true
    d. False as === is comparing two things without type conversion, so if they are different data type it is already false
    e. false as true becomes 1, and 1 == 2 is false
    f. True as boolean(2) returns true because 2 is not 0 so true == true is true
15. == is comparing two things, and it alows type conversion, and === does not allow type conversion so it is more strict
17. the newArr will be [2,4,6] because when we do modify array, we loop through the whole array, but for each element, we cann another callback funciton on it which returns the value of it doubled, and then we push that value into the newArr and repeat,
19. output:
    1
    4
    3
    2
    console.log(1) runs immidiately, and 3 and 2 are in time outs so console.log(4) prints right after and since the timeout for 3 is 0, it prints after that and finally prints 2 after 1000 ms