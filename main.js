/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/


var sandwich = {
  pickle: false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false,
};

function firstPickle() {
  sandwich.pickle = true;
}

function firstLettuce() {
  sandwich.lettuce = true;
}

function firstTomato() {
  sandwich.tomato = true;
}

function firstKetchup() {
  sandwich.ketchup = true;
}

function firstMustard() {
  sandwich.mustard = true;
}

function firstMayo() {
  sandwich.mayo = true;
}

function makeMeASandwich(pickle, lettuce, tomato, ketchup, mustard, mayo) {
  var message = "My sandwich has "  
  if (pickle === true) {
    firstPickle();
    message += "pickles ";
  }
  if (lettuce === true) {
    firstLettuce();
    message += "lettuce ";
  }
  if (tomato === true) {
    firstTomato();
    message += "tomatos ";
  }
  if (mustard === true) {
    firstMustard();
    message += "mustard ";
  }
  if (mayo === true) {
    firstMayo();
    message += "mayo ";
  }
  document.write(message);   
};

makeMeASandwich (false, true, false, true, true, true);

 

// console.log(sandwich);


