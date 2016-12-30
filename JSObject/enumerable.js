/*
	2、可枚举特性（enumerable）
	如果对象的属性，可以使用代码来遍历，则这些属性时可枚举的（enumerable）, 当将其设置为false时，这些属性就不能被遍历了
	
*/

var car = {};

Object.defineProperty(car ,'doors' ,{
	writable : true,
	configurable : true,
	enumerable : true,
	value : 4
});

Object.defineProperty(car , 'wheels' ,{
	writable : true,
	configurable : true,
	enumerable : true,
	value : 4
});

Object.defineProperty(car , 'secretTrackingDeviceEnabled' , {
	enumerable : false,
	value : true
});


// => doors wheels
for(var x in car ){
	console.log(x);
}

// => ["doors", "wheels"]
console.log(Object.keys(car));

// => ["doors", "wheels", "secretTrackingDeviceEnabled"]
console.log(Object.getOwnPropertyNames(car)); 
// 一个属性不是enumerable，并不意味着这个属性是完全被隐藏的，enumerable特性可以阻止某些程序员使用某些属性，但它不会不被检视

// => false
console.log(car.propertyIsEnumerable('secretTrackingDeviceEnabled')); // secretTrackingDeviceEnabled 这个属性是否可以遍历

// => true
console.log(car.secretTrackingDeviceEnabled);