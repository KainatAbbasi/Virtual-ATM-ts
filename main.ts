#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

let myBalance = 20000;
let myPin = 77550;

console.log(chalk.magentaBright('Welcome to the ATM :'));

const pinAns = await inquirer.prompt([
    {
        type : 'number',
        name : 'pin',
        message : (chalk.grey('Enter Your Pin :')),
    }
]);
    if (pinAns.pin !== myPin){
     
    console.log(chalk.redBright("Incorrect pin !"))
}
    else {
        console.log(chalk.green("Succesfully login !"))

while(true){
    let operation = await inquirer.prompt([
       {
        type : 'list',
        name : 'selectOpr',
        message :( chalk.grey('What you want to do ?')),
        choices : [chalk.blue("Withdraw"),chalk.blue("Current Balance"),chalk.blue("Fast Cash"),chalk.red("Exit")]
    }
 ]);
 if (operation.selectOpr === chalk.blue("Withdraw")){
     const amount = await inquirer.prompt([
         {
             type : 'number',
             name : 'enterAmount',
             message : (chalk.grey('Enter amount you want to withdraw :'))
         }
        ]);
        let remainig = myBalance - amount.enterAmount;
        if (amount.enterAmount > myBalance){
            console.log(chalk.redBright('Insufficient Balance !'));
        }else if (amount.enterAmount <= myBalance){
            console.log(chalk.green(`Withdraw successfull! your remaining Balance is : ${remainig}`));
        }else{
            console.log(chalk.redBright('Invalid Number'));
        }   
    }else if (operation.selectOpr === chalk.blue("Current Balance")){
        console.log(chalk.magenta(`Your Current Balance is : ${myBalance}`)); 
    }else if(operation.selectOpr === chalk.blue("Fast Cash")){
        const fastAmount = await inquirer.prompt([
            {
                type : 'list',
                name : 'amount',
                messsage : (chalk.grey ('select Fast Cash Amount ?')),
                choices : [5000,10000,15000,20000]
            }
        ]);
        let withdrawAmount = fastAmount.amount
        if (withdrawAmount <= myBalance){
            myBalance -= withdrawAmount;
        console.log(chalk.green(`Fast Cash withdrawal of ${withdrawAmount} successful! Your remaining balance is: ${myBalance}`));
        }   else {
        console.log(chalk.redBright('Insufficient balance for fast cash withdrawal!'));
    }
}else
    {
        console.log(chalk.yellow('Thank you for using ATM !'));
        break
        };
    }
}