function GreetAyden(name) {
    if (name != null) { //Null test

        let UWU = ["J", "IMMY"];
        if (typeof(name) == typeof(UWU)) { //array test
            if (isUpperCase(name[0])) { //array Uppercase test
                let returnvalue = "HELLO";


                for (let x = 0; x < name.length; x++) {
                    returnvalue += " AND ";
                    returnvalue += name[x];
                }


                returnvalue += "!";


                return returnvalue;
            } else {
                let returnvalue = "Hi";


                for (let x = 0; x < name.length; x++) {
                    returnvalue += " and ";
                    returnvalue += name[x];
                }


                returnvalue += ".";
                return returnvalue;
            }
        } else {
            if (isUpperCase(name)) { //normal uppercase test
                return "HELLO " + name; 
            } else {
                return "Hi " + name;
            }
        }
    } else {
        return "Hello There!";
    }



    // let returnvalue;

    // if (name == null) {
    //     let UWU = ["H", "I"];
    //     if (typeof(name) == typeof(UWU)) {
            
    //         returnvalue = "Hello ";
    //         for (let x = 0; x < length.name; x++) {
    //             returnvalue += name[x];
    //         }
    //         returnvalue += "!";
    //     } else {
    //         returnvalue = "Hello " + name;
    //     }
    // } else {
    //     returnvalue = "Hello there!";
    // }
    






    // if (isUpperCase(name)) {
    //     let finaltesst = returnvalue.toUpperCase;
    //     // returnvalue = returnvalue.toUpperCase;
    //     return finaltesst;
    // }
}


function isUpperCase(stringTest) {
    return stringTest === stringTest.toUpperCase();
}





let UWUChan = ["jimmy", "JOHN", "JIM"];
console.log(GreetAyden(UWUChan));