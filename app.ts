// Q No1:-  Design a type alias named Employee to represent an employee object with properties like name
// (string),department (string),and role(string).
// include an optional nested object named contact to hold phone and email information(if provide). Employee a 
// union type for the role property to restrict it to "Manager","Engineer", or"Intern". Make the skills
// property an optional array of string for listingan employee's skills(if any)



type Employee = {
    name: string,
    department: string,
    role: string,

}
let employee: Employee = {
    name: "Ishrat",
    department: "Technical",
    role: "Engineer"

};
let contact: {
    phoneNo: "012348765972",
    email: "abc@gmail.com",
    role: "Engineer" | "Manager" | "Intern"
};

console.log(employee.name);
console.log(employee,"role");





// Q No2:- Design a type alias named Car to represent a car object.
// Include a nested object named engine within car, containing a property named horsePower(number).
// Define a function named gethorsepower directly withinthe car type alias to retrieve the engine's 
// horsepower.


type car = {

    engine: {
        horsePower: number
    };

    getHorsePower: () => number;
    
};
const car: car = {
    engine: {
        horsePower: 1000,
    },
    getHorsePower: function (){
        return this.engin.horsepower;
    },
};

console.log(car,"getHorsePower");



// Q No3:- Design a type alias named product to represent a T-shirt object with properties like name(string)
// price (number).and color(string).Include a nested object named inventory within product .This inventory 
// object should have two properties:
    //   * stock(number): Represents the numberof T-shirts availablecolors(if any).
    //   * colorOption (optional array of string): Lists available color (if any).
    // Inside the inventory object , define a function named changeColor.This function accepts a new color string
    // as an argument.When called,it should:
    //   *Update the color proepertyof the product object.
    //   *Adjust the price based on the new color (implement your own logics,e.g, increase by 10% for red,
        // decrease by 5% for blue).
    



type Product = {
    name: string,
    price: number,
    color: string,
    inventory:{
        stock: number,
        colorOption?: string[]
    },
    changeColor: (newColor:string)=>string
};
let T_shirt: Product = {
    name: "adidas",
    price: 1500,
    color: "black",
    inventory:{
        stock: 50,
        colorOption:["white", "black", "red", "blue"]
    },
    changeColor: (newColor:string)=>{
        return newColor
    }

}
let myShirt: Product ={
    name: "puma",
    price:2000,
    color:"red",
    inventory:{
        stock: 100,
        colorOption: ["green", "grey", "red", "purple"]
    },
    changeColor:(newColor:string)=>{
        if(newColor = "red"){
            myShirt.price = myShirt.price+(myShirt.price * 10/100)
        }else if(newColor = "grey"){
            myShirt.price =myShirt.price + (myShirt.price *5/100)
        }
        return newColor
    }
}

myShirt.changeColor("red")
console.log(`the price of red shirt: ${myShirt.price}`);
myShirt.changeColor("blue")
console.log(`the price of blue shirt: ${myShirt.price}`);
