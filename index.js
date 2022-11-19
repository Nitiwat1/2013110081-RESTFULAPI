// const datefns = require('date-fns')

// console.log(datefns.format(new Date(),"MM/dd/yyyy"))

// console.log("Hello World");

// let firstName = "Nitiwat"
// let age = 20

// // console.log(firstName+age)

// let info = `
//     my name is ${firstName}
//     my age is ${age}
// `
// console.log(info)

const user = {
    name: "Nitiwat",
    salary: 500000,
    address: {
        province: "Bangkok",
        postcode: 10250
    }
}

// console.log(user.address.postcode)

const showData = () => `${user.name}`
// console.log(ShowData())

const showData2 = () => {
    let info = 'My name is'
    return `${info} ${user.name}`
}

// console.log(showData2())

const sumNumber = (a,b) => a+b;
// console.log(sumNumber(9,1))

const {name , salary} = user
console.log(name)