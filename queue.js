//------
// Queue
//------

function Queue(){
    this.dataStore = [];

    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;

    this.p_dequeue = p_dequeue;
    this.p_toString = p_toString;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift(); // element
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length-1];
}

function toString(){
    var str = "";
    for(var i=0; i<this.dataStore.length; i++){
        str += this.dataStore[i] + "\n";
    }
    return str;
}

function empty(){
    if(this.dataStore.length == 0){
        return true;
    }
    else{
        return false;
    }
}

function count(){
    return this.dataStore.length;
}

function p_dequeue(){
    var priority = this.dataStore[0].code;
    var pos = 0;
    for(var i=1; i<this.dataStore.length; i++){
        if(this.dataStore[i].code < priority){
            priority = this.dataStore[i].code;
            pos = i;
        }
    }
    return this.dataStore.splice(pos, 1); // array
}

function p_toString(){
    var str = "";
    for(var i=0; i<this.dataStore.length; i++){
        str += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return str;
}

// test
var q = new Queue();
q.enqueue("AAA");
q.enqueue("BBB");
q.enqueue("CCC");
console.log(q.toString());

q.dequeue();
console.log(q.toString());

console.log(q.front());
console.log(q.back());

// use Queue

// dancer
function Dancer(name, sex){
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females, infors){
    for(var i=0; i<infors.length; i++){
        infors[i] = infors[i].trim();
    }
    for(var i=0; i<infors.length; i++){
        var e = infors[i].split(" ");
        var sex = e[0];
        var name = e[1];
        if(sex == "F"){
            females.enqueue(new Dancer(name, sex));
        }
        else{
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function outNames(males, females){
    console.log("The dance partners are: \n");
    while(!females.empty() && !males.empty()){
        var person = females.dequeue();
        console.log("female dancer is: " + person.name);
        var person = males.dequeue();
        console.log(" & male dancer is: " + person.name);
    }
}

var infors = ["F Allison McMillan",
              "M Frank Opitz",
              "M Mason McMillan",
              "M Clayton Ruff",
              "F Cheryl Ferenback",
              "M Raymond Williams",
              "F Jennifer Ingram",
              "M Bryan Frazer",
              "M David Durr",
              "M Danny Martin",
              "F Aurora Adney"];
var males = new Queue();
var females = new Queue();
getDancers(males, females, infors);
console.log(males.toString());
console.log(females.toString());

outNames(males, females);
if(males.count() > 0){
    console.log("There are still " + males.count() + " male dancers waiting to dance.");
}
if(females.count() > 0){
    console.log("There are still " + females.count() + " female dancers waiting to dance.");
}


// Radix Sorting
function distribute(nums, queues, digit){
    for(var i=0; i<nums.length; i++){
        if(digit == 1){
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else if(digit == 10){
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
        else{
            console.log("ERROR: Digit must be 1 or 10.");
        }
    }
}

function collect(queues, nums){
    var i = 0;
    for(var j=0; j<10; j++){
        while(!queues[j].empty()){
            nums[i++] = queues[j].dequeue();
        }
    }
}

function dispArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i] + " ");
    }
}

var length = 8;
var queues = [];
for(var i=0; i<10; i++){
    queues[i] = new Queue();
}
var nums = [];
for(var i=0; i<length; i++){
    nums[i] = Math.floor(Math.random() * 99);
}

console.log("Before radix sort: ");
dispArray(nums);
console.log("Sorted by 1: ");
distribute(nums, queues, 1);
collect(queues, nums);
dispArray(nums);
console.log("Sorted by 10: ");
distribute(nums, queues, 10);
collect(queues, nums);
dispArray(nums);


// priority queue
function Patient(name, code){
    this.name = name;
    this.code = code;
}


var q = new Queue();
q.enqueue(new Patient("Smith", 5));
q.enqueue(new Patient("Jones", 4));
q.enqueue(new Patient("Fehrenbach", 6));
q.enqueue(new Patient("Brown", 1));
q.enqueue(new Patient("Ingram", 1));
console.log(q.p_toString());

console.log("Patient being treated: " + q.p_dequeue()[0].name);
console.log("Patient waiting to be seen: ");
console.log(q.p_toString());

console.log("Patient being treated: " + q.p_dequeue()[0].name);
console.log("Patient waiting to be seen: ");
console.log(q.p_toString());
