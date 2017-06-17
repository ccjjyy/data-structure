//-------------------------------------------------
// Array: some important functions to operate array
//-------------------------------------------------

// split()
var sentence = "the quick brown fox";
var words = sentence.split(" ");
for(var i=0; i<words.length; i++){
	console.log("word " + i + ": " + words[i]);
}

// indexOf() & lastIndexOf()
var names = ["David", "Cynthia", "Raymond"];
var name = "David";
var position = names.indexOf(name);
if(position >= 0){
	console.log("Found " + name + " at position " + position);
}
else{
	console.log(name + " not found in array");
}

// join() & toString()
var names = ["David", "Cynthia", "Raymond"];
var namestr1 = names.join();
var namestr2 = names.toString();

console.log(names);
console.log(namestr1);
console.log(namestr2);

// concat() & splice()
var a = ["Mike", "Clayton", "Terrill"];
var b = ["Raymond", "Cynthia", "Bob"];
console.log(a.concat(b));

console.log(a.splice(1,2));
console.log(a); // Notice a is changed by splice

// push() & unshift()
var nums = [1,2,3,4,5];
nums.push(6,7);
console.log(nums);

nums.unshift(-1,0);
console.log(nums);

// pop() & shift()
var nums = [1,2,3,4,5,9];
nums.pop();
console.log(nums);
nums.shift();
console.log(nums);


// splice()
var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);

// reverse() & sort()
var nums = [1,2,3];
console.log(nums.reverse());

var names = ["Mike", "Clayton", "Terrill"];
console.log(names.sort()); // Notice array is sorted by string

var nums = [3,1,2,100,4,200];
console.log(nums.sort());

function compare(num1, num2){
	return num1 - num2;
}
var nums = [3,1,2,100,4,200];
console.log(nums.sort(compare));

// forEach() & every() & some() & reduce() & reduceRight()
// map() & filter()

// Array.matrix()
Array.matrix = function(rows, cols, initial){
	var array = [];
	for(var i=0; i<rows; i++){
		var c = [];
		for(var j=0; j<cols; j++){
			c[j] = initial;
		}
		array[i] = c;
	}
	return array;
}

var array = Array.matrix(5,5,0);
console.log(array[1][1]);

var grades = [[89,77,78],[76,82,81],[90,91,99]];
console.log(grades[1][1]);
