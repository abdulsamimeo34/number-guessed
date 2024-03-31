import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10);
console.log(randomnumber);
const answers = await inquirer.prompt([
    {
        name: "userguessdnnumber",
        type: "number",
        message: "please guess a number",
    }
]);
if (answers.userguessdnnumber === randomnumber) {
    console.log("congtratulational you gussed right number.");
}
else {
    console.log("you guess wrong number.");
}
