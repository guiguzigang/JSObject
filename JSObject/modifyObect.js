/*	
	Object.freeze
		冻结对象，防止被再次改变，被冻结的对象不能加入新的属性，已有的属性也不能被移除，已有的属性值也不能被改变
*/
var bombPop = {
	wrapping: 'plastic',
	flavors: ['Cherry', 'Lime', 'Blue Raspberry']
}
// => false
console.log(Object.isFrozen(bombPop));

delete bombPop.wrapping;
// => undefined
console.log(bombPop.wrapping);

Object.freeze(bombPop);

delete bombPop.flavors;
// => ["Cherry", "Lime", "Blue Raspberry"]
console.log(bombPop.flavors);
// => true
console.log(Object.isFrozen(bombPop));


/*	
	Object.defineProperties
		允许定义新的属性或修改已有的属性
*/
var car = {};
Object.defineProperties(car, {
	'wheels': {
		writable: true,
		configurable: true,
		enumerable: true,
		value: 4
	},
	'doors': {
		writable: true,
		configurable: true,
		enumerable: true,
		value: 4
	}
});
// => 4
console.log(car.doors);
// => 4
console.log(car.wheels);


/*
	Object.defineProperty
		允许把某个属性加到对象中，或者修改一个已存在的属性。
*/
var car = {};
Object.defineProperty(car, 'doors', {
	writable: true,
	configurable: true,
	enumerable: true,
	value: 4
})

/*
	Object.preventExtensions
		该函数可以阻止，新的属性被加到一个已有的对象中，但可以减缩，即属性可以被移除，注意区分 Object.freeze();
*/
var car = {
	doors : 4
};
// => true
console.log(Object.isExtensible(car) === true);

Object.preventExtensions(car);

// => false
console.log(Object.isExtensible(car) === true);
// => 4
console.log(car.doors);
delete car.doors;
// => undefined
console.log( car.doors );

car.tires = 4;
// => undefined
console.log( car.tires );


/*
	Object.prototype
		通过设定对象原型，是对象从现有的原型链解耦，并将此对象加到新对象的原型链尾部；也就是可以将其他对象的属性或方法，加入到已有的对象中；
*/
var Dog = function () {};
Dog.prototype.speak = function () {
	return 'woof';
};

var Cat = function () {};
Cat.prototype.speak = function () {
	return "meow";
};

var Tabby = function () {};
Tabby.prototype = new Cat();
var tabbyCat = new Tabby();
// => meow
console.log(tabbyCat.speak());

// => undefined
console.log(tabbyCat.prototype);

tabbyCat.prototype = new Dog();

// => Dog {}
console.log(tabbyCat.prototype);

// => meow
console.log(tabbyCat.speak());


/*
	Object.seal
		密封一个对象，使其不可变，即不能添加新的属性，已有的属性被标识为不可配置（nonconfigurable）的
		与冻结不同是，密封的对象可以修改
*/
var envelope = {
	letter: 'To whom it may concern'
};
// => false
Object.isSealed(envelope);

Object.seal(envelope);

envelope.letter = 'Oh Hai';
envelope.stamped = true ;
// => Oh Hai 
console.log(envelope.letter);
// => undefined
console.log(envelope.stamped);












