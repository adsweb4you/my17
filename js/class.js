import {username, color} from './User.js'

class Dog {

    static   name = "JEKA";

    constructor(age,color){
      this.age = age;
      this.color = color;
    }

    // method 
     run(){
   return `ჩემი ძაღლი არის ${this.age} წლის, ის არის ${this.color}`;
    }
}

class type extends Dog{

    constructor(age,color){
        super(age,color)
      //  super.run()
    }


    extendrun(){
    return super.run()
    }

}


let dog = new Dog(4, "შავი");
let dog2 = new Dog(5, "თეთრი");

let types = new type(15, 'ლურჯი')


 

 

 
 color('.btn')