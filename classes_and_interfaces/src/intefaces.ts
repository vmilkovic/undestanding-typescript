interface AddFn {
  (a: number, b: number): number;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

const user = new Person('Vedran');
user.greet('Hi there - I am');
console.log(user);

let add: AddFn;
add = (a: number, b: number): number => {
  return a + b;
};
