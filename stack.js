//------
// Stack
//------

function Stack(){
    this.dataStore = [];
    this.top = 0;

    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    return this.dataStore[this.top-1];
}

function clear(){
    this.top = 0;
}

function length(){
    return this.top;
}

// test Stack
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("Length: " + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("Popped element is: " + popped);
console.log(s.peek());

s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("Length: " + s.length());
console.log(s.peek());

s.push("Clayton");
console.log(s.peek());

// use Stack

// Base Converting
function mulBase(num, base){
    var s = new Stack;
    do{
        s.push(num % base);
        num = Math.floor(num /= base);
    }while(num > 0);
    var converted = '';
    while(s.length() > 0){
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

// Palindrome
function isPalindrome(word){
    var s = new Stack();
    for(var i=0; i<word.length; i++){
        s.push(word[i]);
    }
    var rword = '';
    while(s.length() > 0){
        rword += s.pop();
    }
    if(word == rword){
        return true;
    }
    else{
        return false;
    }
}

var word = "hello";
console.log(isPalindrome(word));
var word = "racecar";
console.log(isPalindrome(word));

// Iteration
function factorial(n){
    var s = new Stack();
    while(n > 1){
        s.push(n--);
    }
    var product = 1;
    while(s.length() > 0){
        product *= s.pop();
    }
    return product;
}

console.log(factorial(5));
