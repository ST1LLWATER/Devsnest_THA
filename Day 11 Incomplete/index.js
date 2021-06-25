let obj = function () {
  this.counter = 0;
  this.add = function (item) {
    this.counter += item;
    return this;
  };
  this.subract = function (item) {
    this.counter -= item;
    return this;
  };
  this.print = function () {
    console.log(this.counter);
  };
};

let x = new obj();

x.add(12);
x.subract(2);
x.print();
