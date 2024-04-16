//DAY 42
//TASK 1 (Using function and return the person name)
let person = {
    name: "Yemna Mehmood",
    getname: function() {
        return this.name;  //this refer to the object itself and return its name property
    },
};
console.log(person.getname()); //Result Yemna Mehmood

//TASK 2 (Using function and return multiple objects )
let rectangle = {
    length: 4,
    width: 5,
    calculateArea: function(){
        return this.length*this.width; //this accesses "length" and "width"  property of the object
    },
};
console.log(rectangle.calculateArea()); //Result 20

//TASK 3 (Using this function and change in nested function)
let myobject = {
    property: "Life",
    outermethod: function (){
        console.log(this.property); //it logs life

        let innermethod = ()=>{
            console.log(this.property); //acsesses myobject property due to arrow function capturing "this"
                                        //from outer scope
        };
        innermethod();
    },
};
myobject.outermethod();
//this example shows that using an arrow function for the inner method preserves the "this" context from
//the outer method.