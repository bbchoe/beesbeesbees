
var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {};

// Create Bee subclass from Grub superclass
var Bee = function() {
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

//Create HoneyMakerBee subclass from Bee superclass
var HoneyMakerBee = function() {
  debugger;
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeypot = 0;
}

HoneyMakerBee.prototype = Object(Bee.prototype);
HoneyMakerBee.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeypot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeypot--;
}
