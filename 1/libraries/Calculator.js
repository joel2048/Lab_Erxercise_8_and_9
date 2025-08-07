class Calculator {
  constructor() {
    this.id = Date.now();
  }
  #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`);
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  };

  sub(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  };

  div(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  };

  multi(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  };
}
module.exports = Calculator;