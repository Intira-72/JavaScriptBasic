// Object (Method)

let user = {
    first_name: "Kong",
    last_name: "Raksiam",
    age: 30,
    email: "kong@gmail.com",
    getFullName:function(){
        return this.first_name + " " + this.last_name
    }
};

console.log(user.getFullName());