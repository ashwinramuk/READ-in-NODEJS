const readline = require("readline");

const rl = readline.Interface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Please enter your name: ", (name)=>{
    console.log("Hello "+ name)
    rl.close();
})