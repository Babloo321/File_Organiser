let inputArr = process.argv.slice(2);
let command = inputArr[0];
let helpFun = require("../fileOrganiser/Command/help");
console.log(helpFun.help());
switch(command){
    case "tree":
        // call tree function
        // console.log("tree function call and executed successfully" + path)
        break;
    case "organize":
        // call organize function
        // console.log("organize function call and executed successfully")
        break;
    case "help":
        // call help function
        helpFun.help();
        // console.log("help function call and executed successfully");
        break;
    default:
        console.log("command not recognized:/");
        break;
}