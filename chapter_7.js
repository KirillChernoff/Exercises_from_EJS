function Main_sample_4 () {
	
	var arrays = [[1, 2, 3], [4, 5], [6]];
	
	console.log(arrays.reduce(function(elem1, elem2){
		return elem1.concat(elem2);
	}));

	ageBetweenMotherAndChild();
	middleAgeForCentury();

	console.log(every([NaN, NaN, NaN], isNaN));
	console.log(every([NaN, NaN, 4], isNaN));
	console.log(some([3, NaN, 4], isNaN));
	console.log(some([2, 3, 4], isNaN));
}

function ageBetweenMotherAndChild(){
	var ancestry = JSON.parse(ANCESTRY_FILE);

	var byName = {};

	ancestry.forEach(function(person) {
		byName[person.name] = person;
	});

	var ageBetween = [];

	ancestry.forEach(function(person){
		if (byName[person.mother] !== undefined)
			ageBetween.push(person.born - byName[person.mother].born);
	});

	console.log(average(ageBetween));
}

function middleAgeForCentury(){
	var ancestry = JSON.parse(ANCESTRY_FILE);

	var mapCentury = {};

	ancestry.forEach(function(person){
		if (mapCentury[Math.ceil(person.died/100)] === undefined) {
			mapCentury[Math.ceil(person.died/100)] = [];
			mapCentury[Math.ceil(person.died/100)].push(person.died - person.born);
		}else{
			mapCentury[Math.ceil(person.died/100)].push(person.died - person.born);
		}
	});

	for (var elem in mapCentury) {
		console.log(elem + ":", average(mapCentury[elem]));
	}
}

function groupBy(array, func){
	var map = {};

	for (var i = 0; i < array.length; i++) {
		// array[i]

		//ToDo
	}

	return map;
}

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function every(array, func){
	
	for (var i = 0; i < array.length; i++) {
		if (!func(array[i])) {
			return false;
		}
	}

	return true;

}

function some(array, func){

	for (var i = 0; i < array.length; i++) {
		if (func(array[i])) {
			return true;
		}
	}

	return false;
}