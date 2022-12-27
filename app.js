// array

let colors = ['Red', 'White', 'Blue', 'Yellow']
let fruits = ['มะม่วง', 'แอปเปิ้ล', 'กล้วย', 'ทุเรียน']

console.log("Count :", colors.length)

console.log("Before :", colors)
console.log("After :", colors.sort())

console.log("First :", colors[0])
console.log("End :", colors[colors.length - 1])

console.log("Sort :", fruits.sort())
console.log("Reverse :", fruits.reverse())

fruits.push("ส้ม")
console.log("Add new member :", fruits)