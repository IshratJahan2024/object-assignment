// Q No1:-  Design a type alias named Employee to represent an employee object with properties like name
// (string),department (string),and role(string).
// include an optional nested object named contact to hold phone and email information(if provide). Employee a 
// union type for the role property to restrict it to "Manager","Engineer", or"Intern". Make the skills
// property an optional array of string for listingan employee's skills(if any)
var T_shirt = {
    name: "adidas",
    price: 1500,
    color: "black",
    inventory: {
        stock: 50,
        colorOption: ["white", "black", "red", "blue"]
    },
    changeColor: function (newColor) {
        return newColor;
    }
};
var myShirt = {
    name: "puma",
    price: 2000,
    color: "red",
    inventory: {
        stock: 100,
        colorOption: ["green", "grey", "red", "purple"]
    },
    changeColor: function (newColor) {
        if (newColor = "red") {
            myShirt.price = myShirt.price + (myShirt.price * 10 / 100);
        }
        else if (newColor = "grey") {
            myShirt.price = myShirt.price + (myShirt.price * 5 / 100);
        }
        return newColor;
    }
};
myShirt.changeColor("red");
console.log("the price of red shirt: ".concat(myShirt.price));
myShirt.changeColor("blue");
console.log("the price of blue shirt: ".concat(myShirt.price));
