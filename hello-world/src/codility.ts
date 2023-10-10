function sortSizes(val: string): void {
	let arr = Array.from(val.toUpperCase());
	let sArray = arr.filter((ele) => ele === 'S');
	let mArray = arr.filter((ele) => ele === 'M');
	let lArray = arr.filter((ele) => ele === 'L');
	let finalArray = [...sArray, ...mArray, ...lArray];
	console.log('finalArray => ', finalArray);
	let finalArrayStr = finalArray.toString();
	//finalArrayStr.replace;
	console.log('finalArrayStr => ', finalArrayStr.split(',').join(''));
	console.log('finalArrayStrReplace => ', finalArrayStr.replace(/,/g, ''));
}

// let arr = Array.from('msslln');
// console.log(arr);
// console.log('valmond');

sortSizes('mssLSln');
