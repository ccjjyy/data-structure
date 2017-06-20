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
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift();
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
