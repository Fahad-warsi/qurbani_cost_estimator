#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n");

console.log(chalk.bgBlue.bold("\t\t\tWelCome to\t\t\t"));
console.log(chalk.bgBlue.bold("\t\tQurbani price Calculator\t\t\n"));
console.log(
  "\t",
  chalk.rgb(255, 182, 193).bold.underline("GOAT"),
  chalk.rgb(152, 255, 152).bold.underline("SHEEP"),
  chalk.rgb(137, 207, 240).bold.underline("COW"),
  chalk.rgb(230, 230, 250).bold.underline("CAMEL")
);
console.log("\n");

while (true) {
  const choice = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: "Select an Animal : ",
      choices: ["GOAT", "SHEEP", "COW", "CAMEL", "Exit"],
    },
  ]);
  console.log(
    "\n",
    chalk.bgMagenta.bold("You selected animal is : ", choice.select)
  );

  if (choice.select === "GOAT") {
    const userAnswer = await inquirer.prompt([
      {
        name: "goatprice",
        type: "input",
        message: `\nPlease enter an  1 kgs price of "GOAT" : `,
        validate: (input) => {
          const Numberinput = Number(input);
          if (isNaN(input) || Numberinput <= 0) {
            return chalk.red(
              `Goat price must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
      {
        name: "goatkgs",
        type: "input",
        message: `\nPlease enter "GOAT" Weight in kgs : `,
        validate: (input) => {
          const Numberinput1 = Number(input);
          if (isNaN(input) || Numberinput1 <= 0) {
            return chalk.red(
              `Goat weight must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
    ]);
    console.log(
      "\n",
      chalk.bgBlue.white.bold(
        `The Price is : ${userAnswer.goatprice * userAnswer.goatkgs} for ${
          userAnswer.goatkgs
        } KGS of "GOAT"\n`
      )
    );
  } else if (choice.select === "SHEEP") {
    const userAnswer = await inquirer.prompt([
      {
        name: "sheepprice",
        type: "input",
        message: `\nPlease enter an  1 kgs price of "SHEEP" : `,
        validate: (input) => {
          const Numberinput = Number(input);
          if (isNaN(input) || Numberinput <= 0) {
            return chalk.red(
              `Sheep price must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
      {
        name: "sheepkgs",
        type: "input",
        message: `\nPlease enter "SHEEP" Weight in kgs : `,
        validate: (input) => {
          const Numberinput1 = Number(input);
          if (isNaN(input) || Numberinput1 <= 0) {
            return chalk.red(
              `Sheep weight must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
    ]);
    console.log(
      "\n",
      chalk.bgBlue.white.bold(
        `The Price is : ${userAnswer.sheepkgs * userAnswer.sheepprice} for ${
          userAnswer.sheepkgs
        } KGS of "SHEEP"\n`
      )
    );
  } else if (choice.select === "COW") {
    const userAnswer = await inquirer.prompt([
      {
        name: "cowprice",
        type: "input",
        message: `\nPlease enter an  1 kgs price of "COW" : `,
        validate: (input) => {
          const Numberinput = Number(input);
          if (isNaN(input) || Numberinput <= 0) {
            return chalk.red(
              `Cow price must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
      {
        name: "cowkgs",
        type: "input",
        message: `\nPlease enter "COW" Weight in kgs : `,
        validate: (input) => {
          const Numberinput1 = Number(input);
          if (isNaN(input) || Numberinput1 <= 0) {
            return chalk.red(
              `Cow weight must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
    ]);
    console.log(
      "\n",
      chalk.bgBlue.white.bold(
        `The Price is : ${userAnswer.cowkgs * userAnswer.cowprice} for ${
          userAnswer.cowkgs
        } KGS of "COW"\n`
      )
    );
  } else if (choice.select === "CAMEL") {
    const userAnswer = await inquirer.prompt([
      {
        name: "camelprice",
        type: "input",
        message: `\nPlease enter an  1 kgs price of "CAMEL" : `,
        validate: (input) => {
          const Numberinput = Number(input);
          if (isNaN(input) || Numberinput <= 0) {
            return chalk.red(
              `Camel price must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
      {
        name: "camelkgs",
        type: "input",
        message: `\nPlease enter "CAMEL" Weight in kgs : `,
        validate: (input) => {
          const Numberinput1 = Number(input);
          if (isNaN(input) || Numberinput1 <= 0) {
            return chalk.red(
              `Camel weight must be a number and cannot be Zero or negative`
            );
          }
          return true;
        },
      },
    ]);
    console.log(
      "\n",
      chalk.bgBlue.white.bold(
        `The Price is : ${userAnswer.camelprice * userAnswer.camelkgs} for ${
          userAnswer.camelkgs
        } KGS of "CAMEL"\n`
      )
    );
  } else if (choice.select === "Exit") {
    console.clear();
    console.log(
      chalk.bgRgb(0, 0, 139).rgb(255, 255, 255)(
        "\nThank you for using our package! Goodbye!\n"
      )
    );
    process.exit();
  }
}
