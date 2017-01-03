/*
	检视对象
	1、Object.getOwnPropertyDescriptor 可以告诉你对象属性特性的配置
*/
var o = {foo : 'bar'};

// => Object {value: "bar", writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor( o , 'foo');

// 2、Object.getOwnPropertyNames   返回对象的全部属性的名字，包括不能被枚举的
var box = Object.create({}, {
	openLid: {
		value : function(){
			return 'nothing';
		},
		enumberable : true
	},
	openSeretCompartment : {
		value : function(){
			return 'treasure';
		},
		enumberable : false
	}
});

// => ["openLid", "openSeretCompartment"]
console.log(Object.getOwnPropertyNames(box).sort());



/*
	3、Object.getPrototypeOf
	该方法用来实现返回特定对象的原型。 有时还可以使用__proto__方法来代替；
	注意： 即使Object.getPrototypeOf 可以让你访问一个对象的原型， 但是设置一个对象实例的原型的唯一方法使用__proto__属性
*/
var a = {};

// => true
console.log(Object.getPrototypeOf(a) === Object.prototype && Object.prototype === a.__proto__);



/*
	4、Odbject.hasOwnProperty
	JavaScript 的原型链可以让你通过遍历一个对象的实例，返回所有可枚举的属性，包括不存在与这个对象上，但存在于原型链中的属性；
	hasOwnProperty方法可以让你分辨出某个属性是否存在与对象实例中
*/
var foo = {
	foo : 'foo'
};
var bar = Object.create(foo, {
	bar : {
		enumerable : true,
		value : 'bar'
	}
});

// => bar 
// => foo
for(var x in bar){
	console.log(x);
}

var myProps = Object.getOwnPropertyNames(bar).map(function(i){
	return bar.hasOwnProperty(i) ? i : undefined;
})

// => ['bar']
console.log(myProps);


// 5、Object.keys 返回对象中可枚举的属性
var box = Object.create({} , {
	openLid : {
		value : function(){
			return "nothing";
		},
		enumerable : true
	},
	openSecretCompartment :{
		value : function(){
			return "treasure";
		},
		enumerable : false
	}
})

// => ['openLid']
console.log(Object.keys(box));


// 6、Object.isFrozen 如果对象不能扩展，属性也不能修改，那么这个方法返回true，反之返回false。
var bombPop = {
	wrapping : 'plastic',
	flavors : ['Cherry' ,'Lime' , 'Blue Raspberry']
};
// => false
console.log(Object.isFrozen(bombPop));

delete bombPop.wrapping;
// undefined
console.log(bombPop.wrapping);
// prevent further modifications
Object.freeze(bombPop);

delete bombPop.flavors;
// => ["Cherry", "Lime", "Blue Raspberry"]
console.log(bombPop.flavors);
// => true;
console.log(Object.isFrozen(bombPop));

// 7、Object.isPrototypeOf  用于对象的整个原型链中检查每一环，看传入的对象是否存在与其中

Object.prototype.isPrototypeOf( [] ); // => true;

Function.prototype.isPrototypeOf( () => {} ); // => true;

Function.prototype.isPrototypeOf(function(){}); // => true; 

Object.prototype.isPrototypeOf( () => {} ); // => true;


// 8、Object.isEXtensible  检查对象是否可以被修改
var car = {
	doors: 4
};
// => true
console.log(Object.isExtensible(car) === true);

Object.preventExtensions(car);
// => false
console.log(Object.isExtensible(car) === true);

// 9、Object.isSealed    返回一个Boolean值，取决于一个对象是否可以被扩展，以及它的全部属性是否都不可配置（nonconfigurable）
var ziplockBag = {};
// => false
console.log(Object.isSealed(ziplockBag) === true);

// => true
console.log(Object.isExtensible(ziplockBag));

Object.seal(ziplockBag);

// => true
console.log(Object.isSealed(ziplockBag) === true);

// => false
console.log(Object.isExtensible(ziplockBag));


// 10、Object.valueOf
var Car = function (name) {
	this.name = name;
};

var tesla = Object.create(Car.prototype, {
	name: {
		value : 'tesla'
	}
});
// => Car {name: "tesla"}
console.log(tesla.valueOf());

Car.prototype.valueOf = function () {
	return this.name;
};

// => tesla
console.log(tesla.valueOf());

// Object.is   传入两个参数，在不需要强制转换的情况下，判断是否具有相同的值   （==  ， === 抽象相等运算符会进行强制转换）
// => false
Object.is('True' ,'true');

// => true
Object.is(!function(){}() , true);

// => true
Object.is(undefined , Math.prototype);

// => true
Object.is(NaN , 0/0);
// => false
console.log(NaN === 0/0);

