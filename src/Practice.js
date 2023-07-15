import React from 'react'

export function Practice() {

    //promise chain

    // let arr = []
    // fetch("https://dummyjson.com/products")
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         arr.push(data)
    //     })
    //     .then(() => {
    //         arr.map((x) => {
    //             console.log(x)
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    //callback

    // function fetchData(url, callback) {
    //     setTimeout(() => {
    //         fetch(url)
    //             .then((response) => {
    //                 return response.json()
    //             })
    //             .then((data) => {
    //                 callback(data)
    //             })
    //     }, 2000)
    // }
    // function processData(data) {
    //     console.log("data", data)
    // }

    // fetchData("https://dummyjson.com/products", processData)


//call apply bind
// const std = {fName:"Sonali",lName:"Dube"}
// const std1= {fName:"Devendra",lName:"Bhaije"}

// function msg(m1,m2){
//     console.log(`${m1} ${this.fName} ${this.lName} ${m2} `)
// }

// msg.call(std,"Hello","How are you?")
// msg.call(std1,"Hello","How are you?")

// msg.apply(std,["Hello","How are you?"])
// msg.apply(std1,["Hello","How are you?"])

// var bind1 =msg.bind(std)
// var bind2 =msg.bind(std1)
// bind1("Hello","How are you?")
// bind2("Hello","How are you?")

//


















}