let weeks = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}
console.log(weeks[1]);
let day = 3;
console.log(weeks[day]);
let city1 = {
    name: 'Tyumen',
    population: '10 млн'

}
console.log(city1);

let user = {
    age: 30,
    name: 'Jon',
    passport: {
        serial: 4412,
        number: 238650,
        date: '’10.05.2000’'
    },
    student: 'true'
}
user.work = "true";
console.log(user.work);
console.log(user.passport.number);
delete user.student;

if (!('profession' in user)) {
    user = profession;

}



for (pron in user) {
    console.log(pron);
}

let car = {
    color: 'orange',
    engine: ' 2L',
    brand: ' toyota',
    drive: function () {
        return 'driving'
    }, park: function () {
        return 'park'
    }, start: function () {
        return 'starting'
    }, stop: function () {
        return 'stopping'
    }




}
