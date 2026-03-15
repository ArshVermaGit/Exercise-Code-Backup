export class Forth {
  constructor() {
    this.stack = [];
    this.words = {};
  }

  evaluate(input) {
    const tokens = input.toLowerCase().split(/\s+/);

    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];

      // number
      if (!isNaN(token)) {
        this.stack.push(Number(token));
        continue;
      }

      // word definition
      if (token === ":") {
        const name = tokens[++i];

        if (!isNaN(name)) {
          throw new Error("Invalid definition");
        }

        const definition = [];

        while (tokens[++i] !== ";") {
          let t = tokens[i];

          if (this.words[t]) {
            definition.push(...this.words[t]);
          } else {
            definition.push(t);
          }
        }

        this.words[name] = definition;
        continue;
      }

      // user defined word
      if (this.words[token]) {
        tokens.splice(i + 1, 0, ...this.words[token]);
        continue;
      }

      // operations
      switch (token) {
        case "+":
          this.requireStack(2);
          this.stack.push(this.stack.pop() + this.stack.pop());
          break;

        case "-":
          this.requireStack(2);
          {
            const b = this.stack.pop();
            const a = this.stack.pop();
            this.stack.push(a - b);
          }
          break;

        case "*":
          this.requireStack(2);
          this.stack.push(this.stack.pop() * this.stack.pop());
          break;

        case "/":
          this.requireStack(2);
          {
            const b = this.stack.pop();
            if (b === 0) throw new Error("Division by zero");
            const a = this.stack.pop();
            this.stack.push(Math.trunc(a / b));
          }
          break;

        case "dup":
          this.requireStack(1);
          this.stack.push(this.stack[this.stack.length - 1]);
          break;

        case "drop":
          this.requireStack(1);
          this.stack.pop();
          break;

        case "swap":
          this.requireStack(2);
          {
            const b = this.stack.pop();
            const a = this.stack.pop();
            this.stack.push(b, a);
          }
          break;

        case "over":
          this.requireStack(2);
          this.stack.push(this.stack[this.stack.length - 2]);
          break;

        default:
          throw new Error("Unknown command");
      }
    }
  }

  requireStack(n) {
  if (this.stack.length === 0) {
    throw new Error("Stack empty");
  }

  if (this.stack.length === 1 && n === 2) {
    throw new Error("Only one value on the stack");
  }

  if (this.stack.length < n) {
    throw new Error("Stack empty");
  }
}
}