function sortArrSecond(arr, str) {
    if (str === "asc") {
        return (arr.sort((a, b) => a - b));
    } else if (str === `desc`) {
        return (arr.sort((a, b) => b - a));
    }

}
console.log(sortArrSecond([14, 7, 17, 6, 8], 'desc'))