//complete this code
class Animal {
	constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound.`);
  }
}

class Dog extends Animal {
	  bark() {
    console.log('woof');
  }
}

class Cat extends Animal {
	 purr() {
    console.log('purr');
  }
}

// Example usage:
const myCat = new Cat('Cat');
const myDog = new Dog('Dog');

console.log(myCat.species); // Output: "Cat"
myCat.makeSound(); // Output: "The Cat makes a sound."
myCat.purr(); // Output: "purr"

console.log(myDog.species); // Output: "Dog"
myDog.makeSound(); // Output: "The Dog makes a sound."
myDog.bark(); // Output: "woof"


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
