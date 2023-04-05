{
    let x = 10;
    let y = 11;

    let s = true; //Boolean variable
    console.log(s);

    let MyName = "Ayan";
    console.log(MyName);
    
    let h1;
    console.log("h1 = "+h1);
    let h2 = null;
    console.log("h2 = "+h2);

    let Myself = {
        name: "Ayon",
        age: 23,
        Hometown: "Mymensingh",
        study: function(){
            console.log("I'm studying at North South University");
        }
    };
    console.log(Myself.name);
    Myself.study();
    
    let date1 = new Date(); //Object of Date class
    let arr1 = [10,20,30,40,50]; //arr1 is an array object

    let nameType = "John"; //primitive
    let nameType1 = new String("Michael");  //object

    console.log(typeof(nameType));
    console.log(typeof(nameType1));
    
    nameType = nameType.toLocaleUpperCase();
    nameType1 = nameType1.toLowerCase();
    console.log(nameType);
    console.log(nameType1);
    
    let a1 = 4; //primitive
    let a2 = new Number(5); //Object
    console.log("a2 = "+a2.valueOf());
    console.log(typeof(a2));

}