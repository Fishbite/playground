console.log("Extended clock.js");

class ExtClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template });
    // let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }

  stop() {
    super.stop();
    console.log("Stopped!");
  }
}
