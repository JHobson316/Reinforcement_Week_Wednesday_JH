// Exercise 1: Create a constructor of Dog.
//  Make sure it has the attributes name, breed, color, gender.
//   There are no methods in this class. 
//   The main function below should work with the class you create.



function makeDoge(name, breed, color, gender) {
  // Write your code here
  function Dog(name, breed, color, gender) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.gender = gender;
  }


    let newDog = new Dog('Fiddo', 'Lab', 'brown', 'male');
    alert(newDog.name);
    alert(newDog.breed);
    alert(newDog.color);
    alert(newDog.gender);


  }

  //makeDoge();





  // exercise 2: Create a ToDo constructor.
  //  Create the attributes: name, dueDate, list (this should be an array). 
  //  There should not be a method in this constructor. 
  //  The makeTodo function below should work with the constructor you create.

  function makeTodo() {

    // write code here
    function ToDo(name, dueDate, list){
      this.name = name;
      this.dueDate = dueDate;
      this.list = list;
    }

    let newToDoList = new ToDo('Kenn', 'Next Week', ['Do the dishes', 'Wash your clothes']);
    console.log(newToDoList);
    console.log(newToDoList.list);
  }

  //makeTodo();





  //exercise 3: Create a Person construtor.
  // Create the name and species
  // create a method, 'speak' that when called, alerts the user of the following 'Hello, my name is person.name!'
  function makePerson() {
    // wirte code here
    function Person(name, species){
      this.name = name;
      this.species = species;
    }

    speak(){
      let greeting = (`Hello, my name is ${person.name}!`);
      return greeting;
    
    }
    

    let Person1 = new Person('Diego', 'Homo Sapiens');

    alert(Person1.name);
    alert(Person1.species);
    alert(Person1.speak());
  }

  makePerson();


