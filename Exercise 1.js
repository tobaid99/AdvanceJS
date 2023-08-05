
// // Exercise 1
// let user = {
//     name: "John",
//     years: 30
//   }


//   const  { name, years}= user
//   name= "name";
//   years = "age";
//   isAdmin = "isAdmin";
//   if( isAdmin == absent){
//     return false;
//   }



//   // Exercise 2
//    let  ourPlanet;
//    let currVisitor ;   


     // Exercise 3

  // Hello John : because the varablies are global scop



     // Exercise 4

    //  let user={
    //     name: 'Jhon',
    //     surname: 'smith',
    //  }
    //  user.name="Pete";
    //  delete user.name;

    //  console.log(user);


    // // Exercise 5

    // const user = {
    //     name: "John"
    //   }
      
    //   // does it work?  No it does not work because the object  has been declred as const so mot allwoed to redeclar it again 

    //   user.name = "Pete"


    // // Exercise 6

    // let salaries = {
    //     Fred: 100,
    //     Ted: 160,
    //     Ghaith: 130
    //   }

    // let sum =0 ;
    // let salary = Object.values(salaries);
    //   for( i=0 ; i<salary.length ; i++){
    //     sum+=salary[i]
    //   }

    //   console.log(sum)



        // // Exercise 7

         const x= a+b < 4 ? 'Below' : 'Over'  ;



        // // Exercise 8
      //  Rewrite if..else using multiple ternary operators '?'.

        // let message;

        //     if (login == 'Employee') {
        //     message = 'Hello';
        //     } else if (login == 'Director') {
        //     message = 'Greetings';
        //     } else if (login == '') {
        //     message = 'No login';
        //     } else {
        //     message = '';
        //     }


        let message = (login == 'Employee') ? 'Hello' 
        : (login == 'Director')? 'Greetings' 
        : ( login == '')? 'No login'
        :'';