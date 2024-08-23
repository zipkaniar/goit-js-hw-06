class StringBuilder {
  #value; // private property

  constructor(initialValue) {
    this.#value = initialValue; // initialize value property with initial value
  }

  getValue() {
    return this.#value; // return the current value
  }

  padEnd(str) {
    this.#value += str; // append str to the end of value
  }

  padStart(str) {
    this.#value = str + this.#value; // prepend str to the start of value
  }

  padBoth(str) {
    this.padStart(str); // prepend str to the start of value
    this.padEnd(str); // append str to the end of value
  }
}

// Test kodu
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
