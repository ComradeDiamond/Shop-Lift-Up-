function countDuplicates(array, item) {
	var register = 0;
	for (i=0; i<array.length; i++) {
		if (array[i] == item) {
			register++;
		}
	}
	return register;
}

function duplicateIndex(array, item) { //Returns the index of all duplicates
	let duplicateArray = [];
	for (i=0; i<array.length; i++) {
		if (array[i] == item) {
			duplicateArray.push(i);
		}
	}
	return duplicateArray;
}

function removeFromArray(array, item) { //Yeet from array
	for (i=0; i<array.length; i++) {
		if (array[i] == item) {
			array.splice(i, 1);
		}
	}
}

function findNumber(string) { //Finds the number in a sentence
	let array = string.split(" ");
	for (var i=0; i<array.length; i++) {
		if (!isNaN(parseInt(array[i]))) {
		return parseInt(array[i]); 
		}
	}
	console.log("uh")
}