
var person = {

    firstname : "",
    lastname : "",

    set fname(firstname){ //Setter
         this.firstname = firstname;
         
    },

    set lname(lastname){ //Setter
        this.lastname = lastname;
    },
    get fullname(){ //Getter
        return this.firstname+" "+this.lastname;
    }
};

person.fname = "Ricky";
person.lname = "Smith";
console.log(person.fullname);

