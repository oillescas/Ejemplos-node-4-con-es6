"use strict";

/*****/
let languages = ["Spanish", "French", "Italian", "German", "Polish"];

// In a multiline arrow function, you must use curly braces, 
//  and you must include an explicit return statement.
/*****/
let languages_lower = languages.map((language) => {
    return language.toLowerCase()
});
/*****/
// In a single-line arrow function, curly braces are optional,
//   and the function implicitly returns the value of the last expression.
//   You can include a return statement if you'd like, but it's optional.
let languages_lower1 = languages.map((language) => language.toLowerCase());

// If your arrow function only takes one argument, you don't need to wrap it in
//   parentheses. 
let languages_lower2 = languages.map(language => language.toLowerCase());

// If your function takes multiple arguments, you must wrap them in parentheses.
//let languages_lower = languages.map((language, unused_param) => language.toLowerCase());

console.log(languages_lower); // ["spanish", "french", "italian", "german", "polish"]

// Finally, if your function takes no arguments, you must include empty parentheses before the arrow.
(() => console.log("Hello!"))();
/*****/






/***** ES5 
const polyglot = {
    name : "Michel Thomas",
    languages : ["Spanish", "French", "Italian", "German", "Polish"],
    introduce : function () {
        // this.name is "Michel Thomas"
        const self = this;
        this.languages.forEach(function(language) {
            // this.name is undefined, so we have to use our saved "self" variable 
            console.log("My name is " + self.name + ", and I speak " + language + ".");
        });
    }
}

polyglot.introduce();
/*****/

/*****/
const polyglot = {
    name : "Michel Thomas",
    languages : ["Spanish", "French", "Italian", "German", "Polish"],
    introduce : function () {
        
        this.languages.forEach(language => {
            console.log(`My name is ${this.name}, and I speak ${language}.`);
        });
    }
}

polyglot.introduce();

/*****/
