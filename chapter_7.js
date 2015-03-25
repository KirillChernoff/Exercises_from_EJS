function Main_sample_4 () {
	
	var arrays = [[1, 2, 3], [4, 5], [6]];
	
	console.log(arrays.reduce(function(elem1, elem2){
		return elem1.concat(elem2);
	}));

	console.log(Eevery([NaN, NaN, NaN], isNaN));
	console.log(Eevery([NaN, NaN, 4], isNaN));
	console.log(Ssome([3, NaN, 4], isNaN));
	console.log(Ssome([2, 3, 4], isNaN));
}

function Eevery(array, func){
	
	for (var i = 0; i < array.length; i++) {
		if (!func(array[i])) {
			return false;
		}
	}

	return true;

}

function Ssome(array, func){

	for (var i = 0; i < array.length; i++) {
		if (func(array[i])) {
			return true;
		}
	}

	return false;
}