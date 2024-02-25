"use strict";
const colorMessage = (color1) => {
    if (color1 === "green") {
        console.log("Congrats! you earned 5 points!");
    }
};
colorMessage("green");
colorMessage("red");
const colorMessageWithIfElse = (color1) => {
    color1 === "green"
        ? console.log("Congrats! you earned 5 points!")
        : console.log("Congrats! you earned 10 points!");
};
colorMessageWithIfElse("green");
colorMessageWithIfElse("red");
const colorMessageChain = (color1) => {
    color1 === "green"
        ? console.log("Congrats! you earned 5 points!")
        : color1 === "yellow"
            ? console.log("Congrats! you earned 10 points!")
            : color1 === "red" && console.log("Congrats! you earned 15 points!");
};
colorMessageChain("green");
colorMessageChain("red");
colorMessageChain("yellow");
