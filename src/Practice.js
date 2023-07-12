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

    function fetchData(url, callback) {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    callback(data)
                })
        }, 2000)
    }
    function processData(data) {
        console.log("data", data)
    }

    fetchData("https://dummyjson.com/products", processData)






















}