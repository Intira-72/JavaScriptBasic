// Array To Stringdocument.write

let color_ls = ['Red', 'Green', 'Blue', 'Orange', 'Pink', 'Black', 'White']

console.log("color_ls type :", typeof(color_ls));
console.log("color_ls data : ", color_ls);

let color = color_ls.toString();
console.log(".toString() : ", color);

console.log(".join('*') : ", color_ls.join("*"));

let last_value = color_ls.pop()
console.log("after .pop() : ", color_ls);
console.log("last_value : ", last_value);

