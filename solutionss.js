"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an life is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function concat(string1, string2){
    return string1.toString() + string2.toString();
}

function addOne(num){
    return parseFloat(num) + 1;
}

function isEqual(compare1, compare2){
    return compare1 == compare2;
}

function isEven(num){
    return (num % 2 == 0);

}
function isFalse(x) {
    return !x;
}

function isTrue(x){
    if(x === parseInt(x)){
        return false;
    }else if (x === x.toString()) {
        return false;
    }else if(typeof x == "boolean" ){
        return true;
    } else {
        return !!x;
    }

}

function or(x, y){
    if(x === true && y === false){
        return true;
    }else if(x === false && y === false){
        return false;
    }else if(x === true && y === true){
        return true;
    }else{
        return x;
    }
}

function and(x,y){
    return (x && y);
}

function isIdentical(x,y){
    return (x === y);
}