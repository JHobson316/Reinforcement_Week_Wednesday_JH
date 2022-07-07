
// do ALL work inside main function. Please read instructions,
// and use comments to help you write out the process before coding.



const main = () => {


  // Problem 1:
  // Create a class Product that represents a product sold online.
  //  A product has a price, quantity and name.
  //   The class should have a method that prints a product's information in the following format:
  //    Banana, price 1.1, amount 13.
  //     Create two instances of the class and call the method created to print the product's details.
  class Product{
    constructor(name, price, amount){
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
  }
  let Banana = new Product("Banana", "1.1", "13"); 
  let Orange = new Product("Orange", "0.8", "46");



  // Problem 2:
  // Create a GitHubRepository class with properties: userName, fileName, descriptionOfRepository, and code. 
  // Create a function that prints all properties.
  // Create an instance of the class and use the function.

  class Dev{
    constructor(userName, fileName, descriptionOfRepository, code){
      this.userName = userName;
      this.fileName = fileName;
      this.descriptionOfRepository = descriptionOfRepository;
      this.code = code;
    }
  }
  let Jordan = new Dev("Valkyrii", "app.js", "spaghetti code", "function Thing(a,b){action}");
  console.log(Jordan);

  //   Problem 3:
  //   - Define a class called Pet with three properties: type, breed and age.
  //   - Create a method called formatProperties that prints all object properties using string templating.
  //   - Create a method called changeAge that takes a number and updates the age property of an object. 
  //   - Create a method called dogYears that checks if the pet type of the object is dog, if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!". 
  //   - Create an instance of the Pet Class called pet1. 
  //   - Print all property values of the object using the class method.
  //   - Create another instance of the Pet Class with diffrent property values called pet2.
  //   - Print all property values of the object using the class method. 
  //   - Change the age grade of pet1. 
  //   - Print the age of pet1 in dog years using the class method. 
  //   - Print the age of pet2 in dog years using the class method
  class Pet{
    constructor(type, breed, age){
      this.type = type;
      this.breed = breed;
      this.age = age;
    }

    // Methods 
    formatProperties(){
      console.log(`${this.type}`);
      console.log(`${this.breed}`);
      console.log(`${this.age}`);
    }
    changeAge(){
      this.age = 8;
      console.log(this.age);
    }
    dogYears(){
      let adjustedAge = parseInt(this.age, 10)*7;
      console.log(adjustedAge);
    }
  }

  let pet1 = new Pet("Dog","Yorkie","6");
  let pet2 = new Pet("Cat", "Hades", "9");
  console.log(pet1.formatProperties());
  console.log(pet2.formatProperties());
  console.log(pet1.dogYears());
  console.log(pet2.dogYears());

  // Problem 4:

  // Create a People class with three properties: name, weight, and height.
  //  Create a method that can calculate the BMI of a person using the formula below. 
  //  Create an instance of the class and use the function.

  class People{
    constructor(name, weight, height){
      this.name = name;
      this.weight = weight;
      this.height = height;
    }
    
    // Methods
    bmi(){
      let bodyMassIndex = (parseInt(this.weight,10) / (parseInt(this.height, 10)*parseInt(this.height, 10))*703);
      return bodyMassIndex;
    }
  }

  let Ify = new People("Ify",243,72);
  console.log(Ify);
  console.log(Ify.bmi());
  // EXAMPLE OUTPUT: BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.


  // CHALLENGE 1:

  // Create a Person Class with the properties Name (first, last), Age, Interests, Bio ('NAME is AGE years old. They like INTERESTS')
  class Person{
    constructor(firstName, lastName, age, interests){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.interests = interests;
      this.bio = (`${this.name} ${this.lastName} is ${this.age}. They like ${this.interests}`);
    }
  }

  // Create a class called Student that extends Person and adds the property Cohort to student.
  class Student extends Person{
    constructor(firstName, lastName, age, interests, cohort){
    super(firstName, lastName, age, interests);
    this.cohort = cohort;
    }
  }

  // Create a class called Teacher that extends Person and adds the properties subject, and students (students should be an array of Student objects) Create a method called addStudent that takes an instance of Student and adds a student object to the students array.
  class Teacher extends Person{
    constructor(firstName, lastName, age, interests, subject){
    super(firstName, lastName, age, interests);
    this.subject = subject;
    this.students = [];
    let studentArray = this.students;
    addStudent(){
      studentArray.push(student);
    }
  }


  // Create a method called listAllStudents that prints every student name and student cohort associated with a teacher.

  // Create an instance of the Teacher class called teacher1 with an empty student array.

  //  Create another instance of this class called teacher2 with an empty student array.

  //   Add two students to teacher1 using the class method.

  //   Add two students to teacher2 using the class method.

  //   List all students associated with teacher1 using the class method.

  //   List all studnets associated with teacher2 using the class method.


};

main();



