class Storage {
  #items; // private property

  constructor(items) {
    this.#items = items; // initialize items property
  }

  getItems() {
    return this.#items; // return the current items
  }

  addItem(newItem) {
    this.#items.push(newItem); // add new item to items array
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove); // remove item from items array
  }
}

// Test kodu
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
