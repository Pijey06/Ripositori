console.log("Hello World");

//string -"Pijey", 'pogi',"23"
//number - 24, 24.1, 1230e
//boolean - true, false, 1 or 0, -1 = false, >0 = true
//object - ["apple", "Banana","grape"]
            // [1,2,3,4]
            //[1,"apple",true]
            //[
            //[1,2,3]
            //["apple","banana","grape"]
//undefined = null

console.log("hello world", 123, true,["apple","banana","grape"])
console.error("hello World");

let txtUsername = document.querySelector("#txtUsername")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function() {
    register(txtUsername.value)
}

function register (username) {
    console.log(username)
}