//console.log("Hello World");

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

//console.log("hello world", 123, true,["apple","banana","grape"])
//console.error("hello World");

let txtUsername = document.querySelector("#txtUsername")
let btnRegister = document.querySelector("#btnRegister")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let txtPassword = document.querySelector("#txtPassword")

btnRegister.onclick = function() {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}

function register (username, Password, ConfirmPassword) {
    //console.log(username)
    //if...else if...else
    //Conditional Operators(Greater Than >, Less Than <, Equal ==, Not !,
    //Greater Than or Equal >=, Less Than or Equal <=
    //Not Equal !=

    //console.log(username, Password, ConfirmPassword)

    if(Password == ConfirmPassword && Password != "" && ConfirmPassword != ""){
        consoele.log("Password match!")
    } else if(Password == "" || ConfirmPassword == ""){ 
        return console.log("password must not be empty.")
    }
     else {
        return console.log("Password Does not match!")
    }

}

