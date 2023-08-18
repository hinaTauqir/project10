#!/usr/bin/env node
import inquirer from "inquirer";
class person {
    personality;
    constructor() {
        this.personality = "MyStery";
    }
    askquestion(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Interovert";
        }
        else {
            this.personality = "you are still Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class student extends person {
    name;
    constructor() {
        super();
        this.name = "";
    }
    getname() {
        return this.name;
    }
    setname(nme) {
        this.name = nme;
    }
}
class program {
    static async main() {
        let ans = await inquirer.prompt([
            {
                name: "number",
                type: "number",
                message: "press 1 if u talk to others and type 2 if u dont want to talk"
            },
            {
                name: "name",
                type: "input",
                message: "enter your name"
            },
        ]);
        const myPerson = new person();
        const myStudent = new student();
        myPerson.askquestion(ans.number);
        console.log(`you are ${myPerson.getPersonality()}`);
        myStudent.setname(ans.name);
        console.log(`your name is ${myStudent.getname()} and your personality is ${myStudent.getPersonality()}`);
    }
}
program.main();
