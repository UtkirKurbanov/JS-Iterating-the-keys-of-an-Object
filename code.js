var person = {
    name: 'Nick',
    age: 27,
    job: 'Front-End Developer'
};

// for(var key in person) {
//     if(person.hasOwnProperty(key))
//     console.log(person[key]);
// }

// var keys = Object.keys(person);
// console.log(keys);

Object.keys(person).forEach(function(key){
    console.log(person[key]);
});