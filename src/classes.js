console.log("src/classes.js is running !")

class Character {
    constructor(name = 'tempID', location = 'Town of Beginnings', health = 150) {
        this.name = name;
        this.location = location;
        this.health = health;

    }
    getGreeting() {
        return `Welcome ${this.name}, your health is ${this.health} and your location is ${this.location}`
    }
    checkHealth() {
        let response = `${this.name}, your health is ${this.health}`;
        if(this.health < 50) {
            return response + ` you should consider healing`;

        }else {
            return response + ` you're in good shape`;
        }
    }
    checkLocation() {
        return `Your location is ${this.location}`
    }
};

// ***************************************************************** //
// This one is to create a new class - create new abilities
class Player extends Character {
    constructor(gold = 10, silver = 100, ...args){
        super(...args); // super prefer to the parent class
        this.gold = gold;
        this.silver = silver;
    }
}

class Monster extends Character {
    constructor(accuracy = 8, damage = 25, drop = 5, ...args ) {
        super(...args); 
        this.accuracy = accuracy;
        this.damage = damage; 
        this.drop = drop; 
    }
    checkHealth(){
        return this.health 
    }
}

// ***************************************************************** //

const player1 = new Player(50, 200, 'John', 'Vancouver');
console.log(player1);
// console.log(player1.checkHealth());
// console.log(player1.checkLocation());

const monster1 = new Monster(4, 35, 7, 'Jagga',undefined, 45 ); 
console.log(monster1);
console.log(monster1.checkHealth());
console.log(monster1.checkLocation());

// ***************************************************************** //

// This is an example of map() - as known as a call back function
let myArray = [1,2,3,4];


let newArray = myArray.map((item)=> {
    return item * 2;
});

let shortArray = myArray.map(item => item*3);

console.log(myArray, newArray, shortArray);

// .filter method - creates a new array with all of the elements of that match the filter criteria (result in a true response)

// forEach method - calls a function for each element of an array