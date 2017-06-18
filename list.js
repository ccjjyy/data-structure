//-----
// List
//-----

function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.contains = contains;
}

function append(element) {
   this.dataStore[this.listSize++] = element;
}

function find(element) {
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i;
      }
   }
   return -1;
}

function remove(element) {
   var foundAt = this.find(element);
   if (foundAt > -1) {
      this.dataStore.splice(foundAt,1); // remove the element
      --this.listSize;
      return true;
   }
   return false;
}

function toString() {
    return this.dataStore;
}

function insert(element, after){
	var insertPos = this.find(after);
	if(insertPos>-1){
		this.dataStore.splice(insertPos, 0, element);
		this.listSize++;
		return true;
	}
	return false;
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

function contains(element){
   for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
         return true;
      }
   }
   return false;
}

function front(){
   this.pos = 0;
}

function end(){
   this.pos = this.listSize - 1;
}

function prev(){
   if(this.pos > 0){
      this.pos--;
   }
}

function next(){
   if(this.pos < this.listSize-1){
      this.pos++;
   }
}

function currPos(){
   return this.pos;
}

function moveTo(position){
   this.pos = position;
}

function getElement(){
   return this.dataStore[this.pos];
}

function length(){
   return this.listSize;
}

// main
var names = new List();
names.append("Jack");
console.log(names.toString());
names.clear();
console.log(names.toString());


var names = new List();
names.append("Bob");
names.append("Danny");
names.append("Jack");
console.log(names.toString());

names.find("Jack");

names.insert("Clayton", "Bob");
console.log(names.toString());

names.remove("Clayton");
console.log(names.toString());

console.log(names.listSize);
console.log(names.pos);
console.log(names.length());
console.log(names.contains("Jack"));

// iterator 
console.log(names.pos);
console.log(names.getElement());

names.front();
console.log(names.getElement());
console.log(names.currPos());

names.next();
console.log(names.getElement());
console.log(names.currPos());

names.prev();
console.log(names.getElement());
console.log(names.currPos());

names.end();
console.log(names.getElement());
console.log(names.currPos());

names.moveTo(1);
console.log(names.getElement());
console.log(names.currPos());
