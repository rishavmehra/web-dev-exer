let person = {
    name: "John Doe",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  }
  
  let person2 = {
    name: "Rishav",
  }

  let greet = person.greet.bind(person2);
  person.greet.call(person2);
  greet();
  