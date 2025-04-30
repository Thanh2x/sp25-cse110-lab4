1. 20 gets printed
2. 20 gets printed also
3. var ignore braces so it is accessible outside of it's intended scope
4. 20 gets printed
5. Code returns an error, because result is not defined outside of the if statement, as it's scope is only within the scope braces
6. Code returns an error, because on line 7 we tried to reassign result, which is a const, which will gives us an error so we would never reach line 9
7. Code returns an error, as we tried to re-assign a const on line 7 so it never reaches line 13