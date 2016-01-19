
class HelloWorld {
  constructor(name, purpose) {
    this.attrs = {
      name: name,
      purpose: purpose
    }
  }
  // define a toString() method on the class
  toString() {
    return 'Hello, world!';
  }
}
// instantiate a new instance of HelloWorld
var sample = new HelloWorld("Thambone", "Eat all the things");
// console.log sample's toString() method
console.log(sample.toString());
console.log(sample.attrs);
