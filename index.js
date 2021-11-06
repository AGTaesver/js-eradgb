// object

const bicycle = {
  color: 'blue',
  electric: false,
  start () {
    console.log (" You begin to peddle the bike")
  }
}

console.log(bicycle)
console.log(bicycle.color)
console.log(bicycle.start)
console.log(bicycle.start())
bicycle.color = "red"


console.log(bicycle)
console.log(bicycle.color = "green")
console.log(bicycle.start = function(){
  console.log (" You start the engine on your bike. ")
}
);

  bicycle.start = () => console.log (" You startttttt the engine on your bike. ")

console.log(bicycle.start())

let hello = (name) =>  ({studentName: name});
console.log(hello("Madelyn"));
  //classes in js

  class MyClass {
    constructor(){
      //...
    }

  method1(){
    //...
  }
  method2(){
    //...
  }
  method3(){
    //...
  }

  }


  class User{
    constructor(userName, firstName, lastName, location, createdOnDate){
      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.location = location;
      this.createdOnDate = createdOnDate;

    }
  }

  let Ariel = new User(
    "ArielRodriquez", 
    "Ariel",
    "Rodriquez",
    "Carson",
    "11/06/2021"
  )
  console.log(Ariel)


  class AdminUser extends User {
    constructor(userName, firstName, lastName, location) {
      super(userName, firstName, lastName, location)
    }
  }


  adminTask() {
    console.log(`The admins name is ${this.userName}`);
  }
}

const newUser = new AdminUser("The one", "Sean", "Midgley", "Secret")
console.log(newUser);
NewUser.adminTask()