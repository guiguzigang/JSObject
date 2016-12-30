/*
	在javascript中，对象仅仅是属性（properties）的容器，可以将对象形容成为‘容器包’；
	每个对象都有零个或或多个属性

	1、可配置特性  configuration
		当这个特性（attribute）设置为true时，属性可以从父对象中删除，未来还可以修改属性的描述符；当设置为false时，属性的描述符会被锁定，无法修改。
*/
var car = {};

// A car can have any number of doors
Object.defineProperty(car , 'doors' , {
	configurable: true,
	value : 4
});
// A car must have only four wheels
Object.defineProperty(car , 'wheels' , {
	configurable : false,     // 用于保护对象不被修改
	value : 4
});

delete car.doors;

// => 'undefinds';
console.log(car.doors);


delete car.wheels
// => '4'
console.log(car.wheels);

Object.defineProperty(car , 'doors' , {
	configurable : true,
	value : 5
});

// => '5';
console.log(car.doors);

// => Uncaught TypeError : Cannot redefine property: wheels
Object.defineProperty(car , 'wheels' ,{
	configurable : true,
	value: 4
});








