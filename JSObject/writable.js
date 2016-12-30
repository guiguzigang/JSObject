/*
	可写特性（writable）
	当可写特性为true时，与属性相关联的值是可以改变的，否则，值不可以改变
*/

var car = {};

Object.defineProperty(car , 'wheels' , {
	value : 4,
	writable: false
});

// => 4
console.log( car.wheels );
 
car.wheels = 5;
// => 4
console.log(car.wheels);
