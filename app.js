// Array Sort

let points = [20, -5, -2, 40, 100, -500, 150];

console.log(points)

// .sort() A-Z
console.log("Sort :", points.sort(function(a, b){
    return a - b
}))

// .reverse() Z-A
console.log("Reverse :", points.reverse(function(a, b){
    return b - a
}))