import inquirer from 'inquirer';
import chalk from 'chalk';
import {sum} from './sum.js';
import { subtract } from './sub.js';
import { multiply } from './multi.js';
import { divide } from './division.js';
import chalkAnimation from 'chalk-animation';
import nodebanner from 'node-banner'
import showBanner from 'node-banner';

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,4000);
    })
    
}

async function  welcome(){
    let showbanner=await showBanner('Develop By MUBA ');
    let rainbowTitle=chalkAnimation.rainbow(`\n
    ********************************************************************
    ***********************Let,s Start Calculation!*********************
    ********************************************************************`);
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

`);

}
await welcome();

async function calculatorApp(){
    
    let calculator= await inquirer.prompt([{
        name:'operation',
        type:'list',
        message:chalk.bgYellowBright('Select Operation to perform \n\n'),
        choices:['sum','subtract','multiply','divide']
    },
    {
        name:'num1',
        type:'number',
        message:chalk.bgCyanBright('Enter 1st Number : '),
        
    },
    {
        name:'num2',
        type:'number',
        message:chalk.bgCyan('Enter 2nd Number : '),
        
    },
    ])
    let number1=calculator.num1;
    let number2=calculator.num2;
    let choice=calculator.operation;
    switch(choice){
        case 'sum':
            console.log(chalk.greenBright(`\nThe sum of ${number1} and ${number2} is : `,sum(number1,number2)));
            break;
        case 'subtract':
            console.log(chalk.greenBright(`\nThe Difference of ${number1} and ${number2} is : `,subtract(number1,number2)));
            break;
        case 'multiply':
            console.log(chalk.greenBright(`\nThe Product of ${number1} and ${number2} is : `,multiply(number1,number2)));
            break;
        case 'divide':
            console.log(chalk.greenBright(`\nThe Division of ${number1} and ${number2} is : `,divide(number1,number2)));
            break;
        default:
                console.log("Wrong Value");;
    
    }
    
}



async function startAgain(){
    

    do{
       await calculatorApp();
       var again=await inquirer.prompt([{
        name:"start",
        type:"input",
        message:chalk.blueBright("Press 'y' to calculate again and 'n' to exit ")
    }])

    }while(again.start=='y'||again.start=='Y')
}
startAgain();